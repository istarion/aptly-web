/**
 * Created by orlan on 07.11.16.
 */

class PackagesResource{
  constructor($resource, $mdToast) {
    'ngInject';

    var data = $resource('http://localhost:5001/api/:type/:srcName/packages');

    return data;
  }
}

export default PackagesResource;
