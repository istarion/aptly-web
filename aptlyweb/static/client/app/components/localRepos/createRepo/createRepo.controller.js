class CreateRepoController {
  constructor($mdDialog, $resource) {
    'ngInject';
    var self = this;
    this.name = 'createRepo';

    this.repo = {};

    this.cancel = function () {
      $mdDialog.cancel();
    };

    this.answer = function (repo) {
      this.createRepoResource = $resource('http://localhost:5001/repos/create_local_repo');
      this.createRepoResource.get(repo).$promise.then(function (result) {
        $mdDialog.hide(result);
      },function (fail_result) {
        $mdDialog.cancel(fail_result);
      }
    );

    };




  }


}

export default CreateRepoController;
