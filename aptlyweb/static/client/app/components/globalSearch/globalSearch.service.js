/**
 * Created by orlan on 06.12.16.
 */

class SearchResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource('http://' + $location.host() + ':' + $location.port() + '/api/search/:query');

    return data;
  }
}

class AdvancedSearchResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource('http://' + $location.host() + ':' + $location.port() + '/api/advanced_search/:query');

    return data;
  }
}

export {SearchResource, AdvancedSearchResource};
