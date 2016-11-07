import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import DiffComponent from './diff.component';

import DiffResource from './diff.service';

let DiffModule = angular.module('diff', [
  uiRouter,
  ngMaterial
])

  .component('diff', DiffComponent)

  .service('DiffResource', DiffResource)

  .name;

export default DiffModule;
