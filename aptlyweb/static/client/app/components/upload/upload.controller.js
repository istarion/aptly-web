class UploadController {
  constructor($scope, UploadPackageResource, $mdToast) {
    'ngInject';
    var self = this;
    this.name = 'upload';

    this.uploaded_list = UploadPackageResource.query();

    this.sendPackage = function (event) {
      let fd = new FormData();
      fd.append('package', self.files[0].lfFile);
      UploadPackageResource.create({}, fd, function (answer) {
        var toast = $mdToast.simple().textContent(answer).position('top right').hideDelay(3000);
        $mdToast.show(toast);
        self.uploaded_list = UploadPackageResource.query();
      });
    }
  }
}

export default UploadController;
