/**
 * Created by orlan on 07.11.16.
 */

class LocalPackagesResource{
  constructor($resource, $mdToast) {
    'ngInject';

    var data = $resource('http://localhost:5001/repos/:Name/packages');

    return data;
  }
}

export default LocalPackagesResource;
