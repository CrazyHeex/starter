(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name UserRegisterCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.user')
    .controller('UserRegisterCtrl', UserRegisterController);

  function UserRegisterController($log, AppConfig, $state, UserForm) {
    var vm = this;
    vm.formFields = UserForm.register;

    init();

    function init() {
      vm.form = {
        email: '',
        password: ''
      };
    }

    vm.submitRegister = function (rForm, model) {
      console.log(rForm, model);
      var form = angular.copy(model);

      if (rForm.$valid) {
        $log.log(form);
        $state.go(AppConfig.routes.home)
      } else {
        $log.error('Erro')
      }

    };

  }

})();
