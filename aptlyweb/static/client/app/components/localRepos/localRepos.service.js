/**
 * Created by orlan on 03.11.16.
 */

class LocalReposResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource('http://' + $location.host() + ':' + $location.port() + '/api/repos/:Name', {Name: '@Name'});

    return data;
  }
}



export default LocalReposResource;

