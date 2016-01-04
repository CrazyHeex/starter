(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name loginModal
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict A
   * */


  angular
    .module('app.user')
    .directive('loginModal', loginModalDirective);

  function loginModalDirective($ionicModal, $state, UserForm, AppConfig) {
    return {
      restrict: 'A',
      controller: 'UserLoginCtrl',
      controllerAs: 'vm',
      link: loginModalLink
    };

    function loginModalLink(scope, elem, attr) {

      elem.bind('click', openModal)

      function openModal() {
        $ionicModal.fromTemplateUrl('app/main/user/login/user.login.modal.html', {
            scope: scope,
            focusFirstInput: true
          })
          .then(function (modal) {
            scope.modal = modal;
            scope.modal.show();

          });

        scope.formFields = UserForm.login;
        scope.routeLogged = AppConfig.routes.home;

        scope.submitLogin = function () {
          $state.go(AppConfig.routes.home);
          scope.closeModal();
        }

        scope.closeModal = function () {
          scope.modal.hide();
          scope.modal.remove();
        }
      }


    }
  }

})();
