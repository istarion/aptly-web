class UploadedPackagesDialogController {
  constructor(repo, UploadPackageResource, AddPkgFromUploadResource, $mdDialog) {
    'ngInject';
    var self = this;
    this.name = 'uploadedPackagesDialog';

    this.repo = repo;

    this.uploaded_list = UploadPackageResource.query();

    this.answer = function (file) {
      AddPkgFromUploadResource.save({Name: self.repo.Name, filename: file}, function (result) {
        $mdDialog.hide(result);
      },function (fail_result) {
        $mdDialog.cancel(fail_result);
      })
    };

    this.close = function () {
      $mdDialog.hide();
    }
  }
}

export default UploadedPackagesDialogController;
