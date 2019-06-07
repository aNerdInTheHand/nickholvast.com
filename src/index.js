const m = require('mithril')
const home = require('./pages/home/Home')
const cv = require('./pages/cv/CV')

m.route(document.body, '/', {
  '/': home,
  '/cv': cv
})
