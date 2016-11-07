import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import snapshotsComponent from './snapshots.component';
import SnapshotsResource from './snapshots.service';

let snapshotsModule = angular.module('snapshots', [
  uiRouter,
  ngMaterial
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

  .service('SnapshotsResource', SnapshotsResource)

  .name;

export default snapshotsModule;
