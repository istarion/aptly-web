import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import packagesComponent from './packages.component';
import PackagesResource from './packages.service';

let packagesModule = angular.module('packages', [
  uiRouter,
  ngMaterial
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('packages', {
        url: '/:type/:srcName',
        component: 'packages',
        title: 'Local packages'
      })
  })

  .component('packages', packagesComponent)

  .service('PackagesResource', PackagesResource)

  .name;

export default packagesModule;
