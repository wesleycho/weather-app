'use strict';

angular.module('WeatherApp', [
  'ui.router',
  'ui.bootstrap',
  'WeatherApp.config',
  'WeatherApp.utilities',
  'WeatherApp.weather',
  'WeatherApp.home'
]).config(function($interpolateProvider, $stateProvider, $urlRouterProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
  $stateProvider.state('Home', {
    url: '/',
    'views': {
      '': {
        templateUrl: '/static/views/home.html',
        controller: 'HomeCtrl'
      }
    }
  }).state('About', {
    url: '/about',
    'views': {
      '': {
        templateUrl: '/static/views/about.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
});