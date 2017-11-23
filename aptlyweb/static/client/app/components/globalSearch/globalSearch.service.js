/**
 * Created by orlan on 06.12.16.
 */

class SearchResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.absUrl().slice(0, $location.absUrl().indexOf($location.url())) + '/api/search/:query');

    return data;
  }
}

class AdvancedSearchResource{
  constructor($resource, $location) {
    'ngInject';

    var data = $resource($location.absUrl().slice(0, $location.absUrl().indexOf($location.url())) + '/api/advanced_search/:query');

    return data;
  }
}

export {SearchResource, AdvancedSearchResource};
