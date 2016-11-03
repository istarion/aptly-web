import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import localReposComponent from './localRepos.component';

let localReposModule = angular.module('localRepos', [
  uiRouter,
  ngMaterial,

])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('local_repos', {
      url: '/local_repos',
      component: 'localRepos',
      title: 'Local repositories'
    });
})

.component('localRepos', localReposComponent)

.name;

export default localReposModule;
