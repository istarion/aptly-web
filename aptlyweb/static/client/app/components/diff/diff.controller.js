class SnapshotsDiffController {
  constructor($state, $mdToast, DiffSnapSnapResource, DiffRepoSnapResource, DiffRepoRepoResource) {
    'ngInject';
    var self = this;
    this.name = 'snapshotsDiff';

    this.leftItem = $state.params.leftItem;
    this.rightItem = $state.params.rightItem;
    this.diffType = $state.params.diffType;


    if (this.diffType == 'snap_snap') {
      this.DiffResource = DiffSnapSnapResource;
    } else if (this.diffType == 'repo_snap') {
      this.DiffResource = DiffRepoSnapResource;
    } else if (this.diffType == 'repo_repo') {
      this.DiffResource = DiffRepoRepoResource;
    }

    this.diffData = this.DiffResource.query({leftItem: this.leftItem, rightItem: this.rightItem}, function (result) {
    }, function (result) {
      var toast = $mdToast.simple().textContent(result.data.error).position('top right').hideDelay(3000);
      $mdToast.show(toast);
    });
  }
}

export default SnapshotsDiffController;
