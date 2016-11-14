'use strict';

import CONFIG from './config.yaml';

import appComponent from './components/app';
import titleComponent from './components/title'; 
import navbarComponent from './components/navbar'; 

angular.module(CONFIG.name, [])
  .component('app', appComponent)  
  .component('title', titleComponent)
  .component('navbar', navbarComponent) 