import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import SnapshotsDiff from '../diff/diff';

import snapshotsComponent from './snapshots.component';
import SnapshotsResource from './snapshots.service';
import LocalReposResource from '../localRepos/localRepos.service'

let snapshotsModule = angular.module('snapshots', [
  uiRouter,
  ngMaterial,
  SnapshotsDiff
])

  .config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('snapshots', {
      url: '/snapshots',
      component: 'snapshots',
      title: 'Snapshots'
    });
  })

  .component('snapshots', snapshotsComponent)

  .service('LocalReposResource', LocalReposResource)
  .service('SnapshotsResource', SnapshotsResource)

  .name;

export default snapshotsModule;
