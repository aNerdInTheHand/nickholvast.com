'use strict';

const m = require('mithril')

module.exports = {
  view: function () {
    return m('footer.footer-flex-container', [
      m('div', { class: 'footer-element' }, 'v1.0.0'),
      m('div', { class: 'footer-element' }, 'Copyright (c) 2019 Nick Holvast')
    ])
  }
}
