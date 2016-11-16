'use strict';

require('./style.less')

let __template = require('./template.html');

export default {
  template: __template,
  controller: __controller,
  bindings: {
    ngModel: '<'
  },
  require: [ 'ngModel' ]
} 

__controller.$inject = [
  '$log',
  'tasks'
]

function __controller ($log, tasks) {

  let $ctrl = this;

  $ctrl.tasks = tasks
}