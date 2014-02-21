'use strict';

angular.module('WeatherApp.home', ['WeatherApp.weather'])
  .controller('HomeCtrl', function ($scope, STATES, Weather) {
    $scope.weather = {};
    $scope.weather.state = STATES[7];
    $scope.states = STATES;
    $scope.cities = [];

    $scope.closeAlert = function (idx) {
      $scope.alerts.splice(idx, 1);
    };

    $scope.getWeather = function (e) {
      e.preventDefault();
      $scope.alerts = [];
      if ($scope.weatherForm.$invalid) {
        return $scope.alerts.push({ message: 'Please enter a city' });
      }

      Weather.get($scope.weather.city, $scope.weather.state.abbr)
        .then(function (data) {
          if (_.isUndefined(data.current_observation)) {
            if (data.response.results) {
              var message = 'Did you mean ';
              _.each(data.response.results, function (result, idx) {
                if (idx === data.response.results.length - 1) {
                  message += result.name + ', ' + result.state + '?';
                } else if (idx === data.response.results.length - 2) {
                  message += result.name + ', ' + result.state + ', or ';
                } else {
                  message += result.name + ', ' + result.state + ', ';
                }
              });
              return $scope.alerts.push({ message: message });
            }
            return $scope.alerts.push({ message: data.response.error.description });
          }
          $scope.weatherData = data.current_observation;
          console.log($scope.weatherData);
        });
    };

    $scope.getCities = _.debounce(function () {
      Weather.autocomplete($scope.weather.city)
        .then(function (data) {
          $scope.cities = data.RESULTS;
        });
    }, 200);
  });