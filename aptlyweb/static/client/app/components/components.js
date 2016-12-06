import angular from 'angular';
import About from './about/about';
import AptlyVersion from './aptlyVersion/aptlyVersion';
import GlobalSearch from './globalSearch/globalSearch'
import LocalRepos from './localRepos/localRepos';
import Snapshots from './snapshots/snapshots';
import Packages from './packages/packages';

let componentModule = angular.module('app.components', [
  About,
  AptlyVersion,
  GlobalSearch,
  LocalRepos,
  Snapshots,
  Packages
])

.name;

export default componentModule;
