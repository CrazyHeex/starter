(function(){
    'use strict';
    /**
 * @ngdoc controller
 * @name ChatsCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */
    angular
    .module('app.chat')
        .controller('ChatsCtrl', ChatsController);

    function ChatsController(Chats){
        var vm = this;
        vm.chats = Chats.all();
        vm.remove = function(chat) {
            Chats.remove(chat);
        };
    }

})();