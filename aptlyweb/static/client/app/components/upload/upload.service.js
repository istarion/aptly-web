/**
 * Created by orlan on 08.12.16.
 */

class UploadPackageResource {
  constructor($resource, $location) {
    'ngInject';
    var data = $resource('http://' + $location.host() + ':' + $location.port() + '/api/upload', {}, {
        create: {
            method: "POST",
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined },
            isArray: true
        }
    });

    return data
  }
}

export {UploadPackageResource};
