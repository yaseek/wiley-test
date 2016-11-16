'use strict';

require('./style.less')

let __template = require('./template.html');

export default {
  template: __template,
  bindings: {
    close: '&',
    dismiss: '&',
    resolve: '<'
  }
} 
