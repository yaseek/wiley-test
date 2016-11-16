'use strict';

import LocalStorageModule from 'angular-local-storage';

import CONFIG from './config.yaml';

import appComponent from './components/app';
import titleComponent from './components/title'; 
import navbarComponent from './components/navbar'; 

import tasksService from './services/tasks'

angular.module(CONFIG.name, [
    LocalStorageModule
  ])

  .component('app', appComponent)  
  .component('title', titleComponent)
  .component('navbar', navbarComponent) 

  .factory('tasks', tasksService)