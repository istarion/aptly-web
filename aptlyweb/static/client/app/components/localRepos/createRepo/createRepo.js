import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import createRepoComponent from './createRepo.component';

let createRepoModule = angular.module('createRepo', [
  uiRouter,
  ngMaterial
])

.component('createRepo', createRepoComponent)

.name;

export default createRepoModule;
