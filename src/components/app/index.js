'use strict';

require('./style.less')

let __template = require('./template.html');

export default {
  template: __template,
  controller: __controller
} 

__controller.$inject = [
  '$log',
  'tasks',
  'userQuestion'
]

function __controller ($log, tasks, userQuestion) {

  let $ctrl = this;

  $ctrl.tasks = tasks;

  $ctrl.deleteTask = function (task) {

    userQuestion('This task will be removed', 'Are you sure?')
      .then(() => tasks.deleteTask(task))
    
  }

  $ctrl.confirmTask = function (task) {

    userQuestion('This task will be marked as ready', 'Are you sure?')
      .then(() => tasks.confirmTask(task))
    
  }

  tasks.load();
}