(function () {
  'use strict';
  angular
    .module('app.user')
    .config(configRoutes);

  var path = 'app/main/user';

  function configRoutes($stateProvider) {
    $stateProvider

      .state('login', {
      url: '/login',
      templateUrl: path + '/login/user.login.html',
      controller: 'UserRegisterCtrl',
      controllerAs: 'vm'
    })

    .state('register', {
      url: '/register',
      controller: 'UserRegisterCtrl',
      controllerAs: 'vm',
      templateUrl: path + '/register/user.register.html'
    })

    .state('logout', {
      url: '/logout',
      templateUrl: path + '/logout/logout.html',
      controller: 'LogoutCtrl as vm'
    })

    ;
  }

})();
