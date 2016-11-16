'use strict';

import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import uiBootstrap from 'angular-ui-bootstrap';
import LocalStorageModule from 'angular-local-storage';

import CONFIG from './config.yaml';

import appComponent from './components/app';
import titleComponent from './components/title'; 
import navbarComponent from './components/navbar'; 
import editFormComponent from './components/edit-form'; 
import modalUserQuestionComponent from './components/modal-user-question'; 

import tasksService from './services/tasks'
import userQuestionService from './services/user-question'

import configureApp from './configure-app'

angular.module(CONFIG.name, [
    ngAnimate,
    ngSanitize,
    uiBootstrap,
    LocalStorageModule
  ])
  .constant('config', CONFIG)

  .config(configureApp)

  .component('app', appComponent)  
  .component('title', titleComponent)
  .component('navbar', navbarComponent) 
  .component('editForm', editFormComponent) 
  .component('modalUserQuestion', modalUserQuestionComponent)

  .factory('tasks', tasksService)
  .factory('userQuestion', userQuestionService)