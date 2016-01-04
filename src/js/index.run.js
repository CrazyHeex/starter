(function () {
  'use strict';

  var cordova = window.cordova;

  angular
    .module('starter')
    .run(runIonic);


  function runIonic($ionicPlatform, $log, AppConfig, $cordovaStatusbar, $timeout, $cordovaSplashscreen) {

    $log.debug('runBlock end');

    $ionicPlatform.ready(function () {

      if (cordova && cordova.plugins && cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      }

      if (cordova) {
        $timeout(function () {
          $cordovaSplashscreen.hide();
          $cordovaStatusbar.overlaysWebView(true);
          $cordovaStatusbar.style(1);
          $cordovaStatusbar.styleHex(AppConfig.color);
          $cordovaStatusbar.show();
        }, 100);
      }

    });
  }
})();
