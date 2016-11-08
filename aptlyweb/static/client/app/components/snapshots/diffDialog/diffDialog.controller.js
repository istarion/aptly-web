class DiffDialogController {
  constructor(leftItem, leftType, $mdDialog, $state, LocalReposResource, SnapshotsResource) {
    'ngInject';
    var self = this;
    this.name = 'diffDialog';

    this.snapshots = SnapshotsResource.query();
    this.repos = LocalReposResource.query();

    this.leftItem = leftItem;
    this.leftType = leftType;

    this.cancel = function () {
      $mdDialog.cancel();
    };



    this.diffRepo = function (leftItem, rightRepo) {
      if (self.leftType == 'snapshot') {
        self.diffType = 'repo_snap';
        var tmp = rightRepo;
        rightRepo = leftItem;
        leftItem = tmp;
      } else if (self.leftType == 'repo') {
        self.diffType = 'repo_repo';
      }
      $state.go('diff', {diffType: self.diffType, leftItem: leftItem.Name, rightItem: rightRepo.Name});
      $mdDialog.hide();
    };

    this.diffSnapshot = function (leftItem, rightSnap) {
      if (self.leftType == 'snapshot') {
        self.diffType = 'snap_snap';
      } else if (self.leftType == 'repo') {
        self.diffType = 'repo_snap';

      }
      $state.go('diff', {diffType: self.diffType, leftItem: leftItem.Name, rightItem: rightSnap.Name});
      $mdDialog.hide();
    }
  }
}

export default DiffDialogController;
