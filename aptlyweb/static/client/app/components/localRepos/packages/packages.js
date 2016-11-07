import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import packagesComponent from './packages.component';
import LocalPackagesResource from './packages.service';

let packagesModule = angular.module('packages', [
  uiRouter,
  ngMaterial
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('packages', {
        url: '/packages/:repoName',
        component: 'packages',
        title: 'Local packages'
      })
  })

  .component('packages', packagesComponent)

  .service('LocalPackagesResource', LocalPackagesResource)

  .name;

export default packagesModule;
