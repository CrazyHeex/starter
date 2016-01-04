(function () {
  'use strict';
  angular
    .module('starter')
    .constant('AppConfig', AppConfig());

  function AppConfig() {
    return {
      routes: {
        home: 'tab.dash',
        login: 'register'
      },
      color: '#00796B'
    };
  }
})();
