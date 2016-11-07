import angular from 'angular';
import About from './about/about';
import AptlyVersion from './aptlyVersion/aptlyVersion';
import LocalRepos from './localRepos/localRepos';
import Snapshots from './snapshots/snapshots';

let componentModule = angular.module('app.components', [
  About,
  AptlyVersion,
  LocalRepos,
  Snapshots
])

.name;

export default componentModule;
