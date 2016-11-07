import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import Packages from './packages/packages';
import localReposComponent from './localRepos.component';
import LocalReposResource from './localRepos.service';

let localReposModule = angular.module('localRepos', [
  uiRouter,
  ngMaterial,
  Packages
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

  .service('LocalReposResource', LocalReposResource)

  .name;

export default localReposModule;
