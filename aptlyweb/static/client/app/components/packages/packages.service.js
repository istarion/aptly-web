/**
 * Created by orlan on 07.11.16.
 */

class PackagesResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.absUrl().slice(0, $location.absUrl().indexOf($location.url())) + '/api/:type/:srcName/packages');

    return data;
  }
}

export default PackagesResource;
