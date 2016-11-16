export default __service;

__service.$inject = [
  '$log',
  'localStorageService'
]

function __service ($log, localStorageService) {

  const ORDER_KEY = 'order',
        ITEMS_KEY = 'items';

  let tasks = {

    editItem: false,

    items: [],
    orderAsc: true,

    addTask: function () {
      $log.debug('ADD TASK')

      let item = {
        title: ''
      }
      
      tasks.editItem = item
      tasks.originalTask = null;
    },

    editTask: function (task) {
      tasks.editItem = angular.copy(task)
      tasks.originalTask = task;
    },

    deleteTask: function (task) {
      task.deleted = true;
      tasks.sort(tasks.orderAsc)
    },

    confirmTask: function (task) {
      task.ready = true;
      tasks.update()
    },

    saveTask: function (task) {
      if ( !tasks.originalTask ) {
        tasks.items.unshift(task)
      } else {
        angular.merge(tasks.originalTask, task)
      }
      tasks.editItem = false;
      tasks.sort(tasks.orderAsc)
    },

    load: function () {
      tasks.orderAsc = localStorageService.get(ORDER_KEY)
      if (typeof tasks.orderAsc === 'undefined') {
        tasks.orderAsc = true;
      }

      tasks.items = localStorageService.get(ITEMS_KEY) || []

      tasks.sort(tasks.orderAsc)
    },

    sort: function (order) {
      tasks.orderAsc = order;

      tasks.items = tasks.items
        .filter(item => item.title)
        .sort(tasks.orderAsc
          ? (a, b) => a.title < b.title ? -1 : ( a.title > b.title ? 1 : 0) 
          : (a, b) => a.title < b.title ? 1 : ( a.title > b.title ? -1 : 0) )

      tasks.update()
    },

    update: function () {
      localStorageService.set(ORDER_KEY, tasks.orderAsc)
      localStorageService.set(ITEMS_KEY, tasks.items)
    }
    
  }
  return tasks
}