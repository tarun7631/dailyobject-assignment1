/**
 * 
 * AngularJS dailyobjects
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('dailyobjects', [
      "ngMaterial" , "ui.router" ,"angular-loading-bar"
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$httpProvider', '$compileProvider' , '$stateProvider', '$urlRouterProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($httpProvider, $compileProvider ,$stateProvider, $urlRouterProvider) {

    // $locationProvider.html5Mode(false);

    // routes
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl: 'views/home.html',
        controller: 'MainController',
        // controllerAs: 'main'
      })
      .state('userFollowers',{
        url : '/userFollowers/:id',
        templateUrl: 'views/userFollowers.html',
        controller: 'UserFollowersController',
      })
      .state('userDeatails', {
        url : '/userDetails/:id',
        templateUrl: 'views/userDetails.html',
        controller: 'UserInfoController',
      });
      // .otherwise({
      //   redirectTo: '/'
      // });

      $urlRouterProvider.otherwise('/');

      // $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   * 
   */
  angular
    .module('dailyobjects')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  angular
    .module('dailyobjects')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();