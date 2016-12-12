class UploadedPackagesDialogController {
  constructor(UploadPackageResource) {
    'ngInject';
    var self = this;
    this.name = 'uploadedPackagesDialog';

    this.uploaded_list = UploadPackageResource.query();
  }
}

export default UploadedPackagesDialogController;
