const m = require('mithril')
const Header = require('../../shared/Header')
const Footer = require('../../shared/Footer')

module.exports = {
  view: function () {
    return m('div.atf-site', [
      m(Header),
      m('main.atf-page', [
        m('div.home-element', 'hey there')
      ]),
      m(Footer)
    ])
  }
}
