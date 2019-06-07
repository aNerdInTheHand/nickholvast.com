const m = require('mithril')

module.exports = {
  view: function () {
    return m('div.home-flex-container', [
      m('p.home-element', 'Rumour.text'),
      m('a[href="/"].home-element', {oncreate: m.route.link}, 'Home'),
      m('a[href="/cv"].home-element', {oncreate: m.route.link}, 'CV')
    ])
  }
}
