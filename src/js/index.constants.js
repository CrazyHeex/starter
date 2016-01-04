(function () {
  'use strict';
  angular
    .module('starter')
    .constant('AppConfig', AppConfig());

  function AppConfig() {
    return {
      routes: {
        home: 'photogram.home',
        login: 'intro'
      },
      color: '#00796B'
    };
  }
})();
