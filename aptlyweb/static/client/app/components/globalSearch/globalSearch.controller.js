class GlobalSearchController {
  constructor(SearchResource, AdvancedSearchResource, $mdDialog) {
    'ngInject';
    var self = this;
    this.name = 'globalSearch';
    this.query = '';
    this.advanced = false;
    this.packages = undefined;

    this.find = function () {
      if (this.advanced) {
        this.packages = AdvancedSearchResource.query({"query": this.query})
      } else {
        this.packages = SearchResource.query({"query": this.query})
      }
    };

    this.showAdvancedHelp = function (ev) {
    $mdDialog.show({
      controller: this.DialogController,
      contentElement: '#helpDialog',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
    }
  };


  DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
}

export default GlobalSearchController;
