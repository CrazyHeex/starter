(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name recoveryPass
   *
   * @description
   * _Please update the description and restriction._
   *
   * @restrict E
   * */

  angular
    .module('app.user')
    .directive('recoveryPass', recoveryPassDirective);

  function recoveryPassDirective($ionicPopup, $log, $timeout, Loading, Notify) {
    return {
      restrict: 'A',
      scope: {
        login: '@',
        register: '@',
      },
      link: function ($scope, elem, attr) {

        elem.bind('click', openModal);

        function openModal() {

          $scope.form = {
            recovery: ''
          };

          $scope.erro = '';

          $scope.text = {
            button: (''),
            input: ('Email')
          };

          $ionicPopup
            .show({
              scope: $scope,
              template: '<div class="popup-recovery"><form name="form.recovery" form-manager><label class="item item-input"><i class="icon ion-email placeholder-icon"></i><input type="email" ng-model="email" id="email" name="email" placeholder="{{ text.input }}" required ng-maxlength="80"></label><span class="error-msg">{{erro}}</span></form></div>',
              title: ('A new password will be sent to your e-mail address'),
              buttons: [{
                text: ('Cancel'),
                type: 'button-calm'
              }, {
                text: ('Send'),
                type: 'button-positive',
                onTap: function (e) {
                  if ($scope.form.recovery.$valid) {
                    return $scope.form.recovery.email.$viewValue;
                  } else {
                    //não permite o usuário fechar até ele digitar o email
                    e.preventDefault();
                    $scope.erro = ('Invalid Email');
                  }
                }
              }]
            })
            .then(function (res) {
              if (!angular.isUndefined(res)) {
                var email = res;

                console.log(res);

                Loading.start();

                $log.log('Recovery pass');
                $timeout(function () {
                  Notify.alert({
                    title: 'Recovery pass',
                    text: 'Send Pass'
                  })
                  Loading.end();

                }, 2000)
              }
            });

        }
      }
    }
  }


})();
