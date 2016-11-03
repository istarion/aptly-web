import angular from 'angular';
import About from './about/about';
import AptlyVersion from './aptlyVersion/aptlyVersion';
import LocalRepos from './localRepos/localRepos';

let componentModule = angular.module('app.components', [
  About,
  AptlyVersion,
  LocalRepos
])

.name;

export default componentModule;
