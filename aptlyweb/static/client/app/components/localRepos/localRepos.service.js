/**
 * Created by orlan on 03.11.16.
 */

class LocalReposResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/repos/:Name', {Name: '@Name'});

    return data;
  }
}

class AddPkgByKeyResource{
    constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/repos/:Name/add_pkg',
      {
        Name: '@Name',
        PackageRefs: '@PackageRefs'
      });

    return data;
  }
}

class AddPkgFromUploadResource{
    constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/repos/:Name/add_from_upload/',
      {
        Name: '@Name',
        filename: '@filename'
      });

    return data;
  }
}

class DelPkgByKeyResource{
    constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/repos/:Name/del_pkg',
      {
        Name: '@Name',
        PackageRefs: '@PackageRefs'
      });

    return data;
  }
}

export {LocalReposResource, AddPkgByKeyResource, DelPkgByKeyResource, AddPkgFromUploadResource};

