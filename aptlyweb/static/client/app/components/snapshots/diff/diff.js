import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import DiffComponent from './diff.component';

import DiffResource from './diff.service';

let DiffModule = angular.module('diff', [
  uiRouter,
  ngMaterial
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('diff', {
        url: '/diff/:leftSnap/:rightSnap',
        component: 'diff',
        title: 'Diff'
      })
  })

  .component('diff', DiffComponent)

  .service('DiffResource', DiffResource)

  .name;

export default DiffModule;
