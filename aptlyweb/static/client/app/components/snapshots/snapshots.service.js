/**
 * Created by orlan on 07.11.16.
 */

class SnapshotsResource{
  constructor($resource, $mdToast) {
    'ngInject';

    var data = $resource('http://localhost:5001/api/snapshots/:Name', {Name: '@Name'});

    return data;
  }
}



export default SnapshotsResource;

