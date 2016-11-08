import DiffDialogComponent from './diffDialog/diffDialog.component';

class SnapshotsController {
  constructor(SnapshotsResource, $mdDialog) {
    'ngInject';
    var self = this;
    this.name = 'snapshots';

    this.SnapshotsResource = SnapshotsResource;
    this.snapshots = SnapshotsResource.query();

    this.query = function () {
      self.snapshots = SnapshotsResource.query();
    };


    this.confirmDeleteSnapshot = function (event, snapshot) {
      var confirmDialog = $mdDialog.confirm()
        .title('Would you like to delete snapshot ' + snapshot.Name + '?')
        .textContent('Snapshot will be permanently deleted.')
        .ariaLabel('Snapshot deleting dialog')
        .targetEvent(event)
        .clickOutsideToClose(true)
        .ok('Yes')
        .cancel('No');
      $mdDialog.show(confirmDialog).then(function () { //SUCCESS
        self.deleteSnapshot(snapshot);
      })
    };


    this.diffSnap = function (event, snap) {
      var diffDialog = angular.extend(DiffDialogComponent, {
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: true,
        locals: {
          leftItem: snap,
          leftType: 'snapshot',
        }
      });
      $mdDialog.show(diffDialog);
    };
  }

  deleteSnapshot(snapshot) {
    snapshot.$delete(snapshot.Name, this.query);
  }
}

export default SnapshotsController;
