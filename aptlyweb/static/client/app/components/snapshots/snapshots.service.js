/**
 * Created by orlan on 07.11.16.
 */

class SnapshotsResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.absUrl().slice(0, $location.absUrl.indexOf($location.url())) + '/api/snapshots/:Name', {Name: '@Name'});

    return data;
  }
}



export default SnapshotsResource;

