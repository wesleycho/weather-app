'use strict';

angular.module('WeatherApp.weather', ['WeatherApp.config', 'WeatherApp.utilities'])
  .factory('Weather', function ($rootScope, $q, $http, cfg, Request) {
    var w = {};

    w.get = function (city, state) {
      return Request(cfg.weatherByCityState, 'post', { city: city, state: state });
    };

    w.autocomplete = function (string) {
      return Request(cfg.autocomplete, 'get', { q: string });
    };

    return w;
  })
  .directive('weatherCard', function () {
    return {
      restrict: 'E',
      scope: {
        weather: '='
      },
      templateUrl: '/static/views/Weather/weather-card.html',
      link: function (scope, elem, attrs) {

      }
    }
  });