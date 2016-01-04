(function () {
  'use strict';
  /**
   * @ngdoc controller
   * @name ChatDetailCtrl
   *
   * @description
   * _Please update the description and dependencies._
   *
   * @requires $scope
   * */
  angular
    .module('app.chat')
    .controller('ChatDetailCtrl', ChatDetailController);

  function ChatDetailController(Chats, $stateParams) {
    var vm = this;
    vm.chat = Chats.get($stateParams.chatId);
  }

})();
