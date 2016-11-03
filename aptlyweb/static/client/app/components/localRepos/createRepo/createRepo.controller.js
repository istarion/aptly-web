class CreateRepoController {
  constructor($mdDialog, $resource, LocalReposResource) {
    'ngInject';
    var self = this;
    this.name = 'createRepo';

    this.repo = {};

    this.cancel = function () {
      $mdDialog.cancel();
    };

    this.answer = function (repo) {
      LocalReposResource.save(repo, function (result) {
        $mdDialog.hide(result);
      },function (fail_result) {
        $mdDialog.cancel(fail_result);
      }
    );

    };




  }


}

export default CreateRepoController;
