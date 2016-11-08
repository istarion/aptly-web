class DiffDialogController {
  constructor(leftItem, leftType, $mdDialog, $state, LocalReposResource, SnapshotsResource) {
    'ngInject';
    var self = this;
    this.name = 'diffDialog';

    this.repos = LocalReposResource.query();
    this.snapshots = SnapshotsResource.query();


    this.leftItem = leftItem;
    this.leftType = leftType;


    this.cancel = function () {
      $mdDialog.cancel();
    };

    this.diffSnapshots = function (leftSnap, rightSnap) {
      $state.go('diff', {leftSnap: leftSnap.Name, rightSnap: rightSnap.Name});
      $mdDialog.hide();
    }
  }
}

export default DiffDialogController;
