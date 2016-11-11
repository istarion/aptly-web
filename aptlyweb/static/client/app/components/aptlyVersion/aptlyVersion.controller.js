class AptlyVersionController {

  constructor($resource, $rootScope) {
    'ngInject'
    var self = this;
    this.name = 'aptlyVersion';
    this.version_resource = $resource('http://localhost:5001/api/version');
    this.version = 'not yet!';
    this.version_resource.get().$promise.then( function(result) {
        self.version = result.Version;
      }
    );
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
          console.log(123);
      })
  }
}

export default AptlyVersionController;
