class EditRepoController {
  constructor($mdDialog, $resource, LocalReposResource, repo) {
    'ngInject';
    var self = this;
    this.name = 'createRepo';

    this.repo = repo;

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

export default EditRepoController;
