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

class AddPkgByKeyResource{
    constructor($resource, $location) {
    'ngInject';

    var data = $resource('http://' + $location.host() + ':' + $location.port() + '/api/repos/:Name/add_pkg',
      {
        Name: '@Name',
        PackageRefs: '@PackageRefs'
      });

    return data;
  }
}

class DelPkgByKeyResource{
    constructor($resource, $location) {
    'ngInject';

    var data = $resource('http://' + $location.host() + ':' + $location.port() + '/api/repos/:Name/del_pkg',
      {
        Name: '@Name',
        PackageRefs: '@PackageRefs'
      });

    return data;
  }
}

export {LocalReposResource, AddPkgByKeyResource, DelPkgByKeyResource};

