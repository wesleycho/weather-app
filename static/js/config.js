angular.module('WeatherApp.config', [])
  .factory('cfg', function() {
    var cfg = {};

    var protocol = location.protocol + '//',
        host = location.host + '/';

    cfg.autocomplete = protocol + host + 'api/weather/autocomplete';
    cfg.weatherByCityState = protocol + host + 'api/weather/get/';

    return cfg;
  });