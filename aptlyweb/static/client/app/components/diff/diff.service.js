/**
 * Created by orlan on 07.11.16.
 */

class DiffSnapSnapResource{
  constructor($resource) {
    'ngInject';

    var data = $resource('http://localhost:5001/api/snapshots/diff/:leftItem/:rightItem');

    return data;
  }
}

class DiffRepoSnapResource{
  constructor($resource) {
    'ngInject';

    var data = $resource('http://localhost:5001/api/repos/diff_snap/:leftItem/:rightItem');

    return data;
  }
}

class DiffRepoRepoResource{
  constructor($resource) {
    'ngInject';

    var data = $resource('http://localhost:5001/repos/diff_repo/:leftItem/:rightItem');

    return data;
  }
}

export {DiffSnapSnapResource, DiffRepoSnapResource,DiffRepoRepoResource};

