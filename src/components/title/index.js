'use strict';

import CONFIG from './../../config.yaml';

export default {
  controller: __controller 
} 

__controller.$inject = [
  '$element'
] 

function __controller ($element) {
  $element.text(CONFIG.title);
}