(function () {
  'use strict';
  angular
    .module('app.chat')
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    var path = 'app/main/chat/';

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: path + 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: path + 'templates/tab-dash.html',
          controller: 'DashCtrl',
          controllerAs: 'vm'
        }
      }
    })

    .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: path + 'templates/tab-chats.html',
            controller: 'ChatsCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: path + 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl',
            controllerAs: 'vm'
          }
        }
      })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: path + 'templates/tab-account.html',
          controller: 'AccountCtrl',
          controllerAs: 'vm'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');
  }

})();
