'use strict';

let __template = 'APP';

export default {
  template: __template,
  controller: __controller
} 

__controller.$inject = [
  '$log'
]

function __controller ($log) {
  $log.debug('APP');
}