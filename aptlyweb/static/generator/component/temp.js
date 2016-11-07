import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter,
  ngMaterial
])

  .component('<%= name %>', <%= name %>Component)

  .name;

export default <%= name %>Module;
