(function(){
    'use strict';
    /**
 * @ngdoc controller
 * @name AccountCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */
    angular
    .module('app.chat')
        .controller('AccountCtrl', AccountController);

    function AccountController(){
        var vm = this;
        vm.settings = {
            enableFriends: true
        };
    }

})();