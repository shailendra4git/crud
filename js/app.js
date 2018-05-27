'use strict';

angular.module('nodeNg', [
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('login', {
            url: '/',
            views: {
                'content':{
                        templateUrl: 'views/login.html',
                        controller: 'LoginCtrl',
                        controllerAs: 'vm'
                }
            }
        })
        .state('home', {
            url: '/',
            views: {
                'content':{
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'vm'
                }
            }
        });        
});
