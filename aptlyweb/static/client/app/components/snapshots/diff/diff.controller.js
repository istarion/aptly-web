class SnapshotsDiffController {
  constructor($state, DiffResource) {
    'ngInject';
    var self = this;
    this.name = 'snapshotsDiff';

    this.leftSnap = $state.params.leftSnap;
    this.rightSnap = $state.params.rightSnap;

    this.diffData = DiffResource.query({leftSnap: this.leftSnap, rightSnap: this.rightSnap});
  }
}

export default SnapshotsDiffController;
