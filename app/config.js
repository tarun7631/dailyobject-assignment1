;(function() {


	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
  angular
  	.module('dailyobjects')
    .constant('CONSTANTS', {
      'API_URL': 'https://api.github.com/' ,
      'USER_LIST' : "users" ,
      'SEARCH_USER' : "search/users?q=" ,
      'USER_DETAILS' : 'users/'

    });


})();
