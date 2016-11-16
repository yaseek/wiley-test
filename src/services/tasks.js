export default _tasks;

_tasks.$inject = [
  '$log',
  'localStorageService'
]

function _tasks ($log, localStorageService) {

  const ORDER_KEY = 'order',
        ITEMS_KEY = 'items';

  let tasks = {

    items: [],
    orderAsc: true,

    addTask: function () {
      $log.debug('ADD TASK')
    },

    load: function () {
      tasks.orderAsc = localStorageService.get(ORDER_KEY)
      tasks.items = localStorageService.get(ITEMS_KEY)

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