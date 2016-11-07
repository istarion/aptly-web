class PackagesController {
  constructor($state, PackagesResource) {
    'ngInject';
    var self = this;


    this.srcName = $state.params.srcName;
    this.type = $state.params.type;

    this.name = this.srcName + ' ' + this.type + ' packages';

    this.packages = PackagesResource.query({srcName: this.srcName, type: this.type});

  }
}

export default PackagesController;
