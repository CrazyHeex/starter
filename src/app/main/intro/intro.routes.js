(function () {
  'use strict';
  angular
    .module('app.intro')
    .config(routes);

  function routes($stateProvider) {
    var path = 'app/main/intro/';

    $stateProvider

      .state('intro', {
      url: '/intro',
      controller: 'IntroCtrl',
      controllerAs: 'vm',
      templateUrl: path + 'templates/intro.html'
    });

  }

})();
