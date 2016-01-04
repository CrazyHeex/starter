(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name UserLoginCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('UserLoginCtrl', UserLoginController);

  function UserLoginController(UserForm, $state, AppConfig) {
    var vm = this;
    vm.formFields = UserForm.login;
    vm.routeLogged = AppConfig.routes.home;

    vm.submitLogin = function () {
      $state.go(AppConfig.routes.home);
    }

  }

})();
