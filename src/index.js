'use strict';

import CONFIG from './config.yaml';

import appComponent from './components/app.js';

angular.module(CONFIG.name, [])
  .component('app', appComponent)