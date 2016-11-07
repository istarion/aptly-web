/**
 * Created by orlan on 03.11.16.
 */

class LocalReposResource{
  constructor($resource, $mdToast) {
    'ngInject';

    var data = $resource('http://localhost:5001/repos/local_repos/:Name', {Name: '@Name'});

    return data;
  }
}



export default LocalReposResource;

