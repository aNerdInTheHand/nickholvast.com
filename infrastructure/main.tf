provider "aws" {
  region = "us-east-1" # required for CloudFront over HTTPS
}

variable "root_domain_name" {
  default = "nickholvast.com"
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "${var.root_domain_name}"
  acl    = "public-read"
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AddPerm",
    "Effect": "Allow",
    "Principal": "*",
    "Action": ["s3:GetObject"],
    "Resource": ["arn:aws:s3:::${var.root_domain_name}"]
  }]
}
POLICY
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

data "aws_acm_certificate" "ssl_cert" {
  domain   = "*.${var.root_domain_name}"
  statuses = ["ISSUED"]
}

resource "aws_cloudfront_distribution" "cloudfront" {
  origin {
    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
    domain_name = "${aws_s3_bucket.website_bucket.website_endpoint}"
    origin_id   = "${var.root_domain_name}"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    viewer-protocol-policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "${var.root_domain_name}"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  custom_error_response {
    error_caching_min_ttl = 3000
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  aliases = ["${var.root_domain_name}"]

  restrictions {
    geo_restrictions {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "${data.aws_acm_certificate.ssl_cert.arn}"
    ssl_support_method  = "sni-only"
  }
}

data "aws_route53_zone" "zone" {
  name         = "${var.root_domain_name}"
  private_zone = false
  most_recent  = true
}

resource "aws_route53_record" "frontend_record" {
  zone_id = "${data.aws_route53_zone.zone_id}"
  name    = "${var.root_domain_name}"
  type    = "A"
  alias = {
    name                   = "${aws_cloudfront_distribution.cloudfront.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.cloudfront.hosted_zone_id}"
    evaluate_target_health = false
  }
}
