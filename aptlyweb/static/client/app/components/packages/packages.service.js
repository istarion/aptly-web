/**
 * Created by orlan on 07.11.16.
 */

class PackagesResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource('http://' + $location.host() + ':' + $location.port() + '/api/:type/:srcName/packages');

    return data;
  }
}

export default PackagesResource;
