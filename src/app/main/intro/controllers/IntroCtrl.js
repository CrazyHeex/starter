(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name IntroCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.intro')
    .controller('IntroCtrl', IntroController);

  function IntroController(AppConfig, $state) {
    var vm = this;
    vm.enterPage = function () {
      $state.go(AppConfig.routes.login)
    }
  }

})();
