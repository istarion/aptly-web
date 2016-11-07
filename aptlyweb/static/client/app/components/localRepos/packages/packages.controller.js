class PackagesController {
  constructor($state, LocalPackagesResource) {
    'ngInject';
    var self = this;


    this.repoName = $state.params.repoName;

    this.name = this.repoName + ' packages';

    this.packages = LocalPackagesResource.query({Name: this.repoName});

  }
}

export default PackagesController;
