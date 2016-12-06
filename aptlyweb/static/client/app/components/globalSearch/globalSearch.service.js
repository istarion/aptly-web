/**
 * Created by orlan on 06.12.16.
 */

class SearchResource{
  constructor($resource) {
    'ngInject';

    var data = $resource('http://localhost:5001/api/search/:query');

    return data;
  }
}

class AdvancedSearchResource{
  constructor($resource) {
    'ngInject';

    var data = $resource('http://localhost:5001/api/advanced_search/:query');

    return data;
  }
}

export {SearchResource, AdvancedSearchResource};
