import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import DiffComponent from './diff.component';

import {DiffSnapSnapResource, DiffRepoSnapResource, DiffRepoRepoResource} from './diff.service';

let DiffModule = angular.module('diff', [
  uiRouter,
  ngMaterial
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('diff', {
        url: '/diff/:diffType/:leftItem/:rightItem',
        component: 'diff',
        title: 'Diff'
      })
  })

  .component('diff', DiffComponent)

  .service('DiffSnapSnapResource', DiffSnapSnapResource)
  .service('DiffRepoSnapResource', DiffRepoSnapResource)
  .service('DiffRepoRepoResource', DiffRepoRepoResource)

  .name;

export default DiffModule;
