import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import aptlyVersionComponent from './aptlyVersion.component';

let aptlyVersionModule = angular.module('aptlyVersion', [
  uiRouter,
  ngResource
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('aptly_version', {
      url: '/aptly_version',
      component: 'aptlyVersion',
      title: "Aptly version"
    });
})

.component('aptlyVersion', aptlyVersionComponent)

.name;

export default aptlyVersionModule;
