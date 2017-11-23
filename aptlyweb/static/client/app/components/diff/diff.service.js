/**
 * Created by orlan on 07.11.16.
 */

class DiffSnapSnapResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/snapshots/diff/:leftItem/:rightItem');

    return data;
  }
}

class DiffRepoSnapResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/repos/diff_snap/:leftItem/:rightItem');

    return data;
  }
}

class DiffRepoRepoResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/repos/diff_repo/:leftItem/:rightItem');

    return data;
  }
}

export {DiffSnapSnapResource, DiffRepoSnapResource,DiffRepoRepoResource};

