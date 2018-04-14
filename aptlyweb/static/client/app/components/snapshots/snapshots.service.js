/**
 * Created by orlan on 07.11.16.
 */

class SnapshotsResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/snapshots/:Name', {Name: '@Name'});

    return data;
  }
}



export default SnapshotsResource;

