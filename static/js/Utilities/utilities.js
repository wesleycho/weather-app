'use strict';

angular.module('WeatherApp.utilities', [])
  .config(function($httpProvider) {
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  })
  .factory('Request', function ($http) {
    var resolve = function (res) {
      return res.data;
    };

    return function (url, method, data, config) {
      method = method.toLowerCase();
      if (_.isObject(data)) {
        if (method === 'get') {
          config = _.merge(config || {}, { params: data });
        }
      }

      if (method === 'get') {
        return $http.get(url, config)
          .then(resolve);
      }

      return $http[method](url, data, config)
        .then(resolve);
    };
  });