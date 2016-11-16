'use strict';

let __template = require('./template.html');

export default {
  template: __template,
  controller: __controller
} 

__controller.$inject = [
  'tasks'
]

function __controller (tasks) {

  this.tasks = tasks;

}
