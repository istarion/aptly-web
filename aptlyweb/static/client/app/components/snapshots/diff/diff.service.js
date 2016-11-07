/**
 * Created by orlan on 07.11.16.
 */

class DiffResource{
  constructor($resource) {
    'ngInject';

    var data = $resource('http://localhost:5001/snapshots/diff/:leftSnap/:rightSnap');

    return data;
  }
}



export default DiffResource;

