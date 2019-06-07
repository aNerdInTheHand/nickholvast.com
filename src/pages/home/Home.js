const m = require('mithril')
const Header = require('../../shared/Header')
const Footer = require('../../shared/Footer')
const HomePage = require('./views/HomePage')

module.exports = {
  view: function () {
    return m('div.atf-site', [
      m(Header),
      m('main.atf-page', [
        m(HomePage)
      ]),
      m(Footer)
    ])
  }
}
