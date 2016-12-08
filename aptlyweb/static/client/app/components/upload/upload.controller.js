class UploadController {
  constructor($scope, UploadPackageResource) {
    'ngInject';
    var self = this;
    this.name = 'upload';

    this.sendPackage = function (event) {
      let fd = new FormData();
      fd.append('package', self.files[0].lfFile);
      UploadPackageResource.create({}, fd);
    }
  }
}

export default UploadController;
