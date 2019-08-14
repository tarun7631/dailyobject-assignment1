/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
 ;(function() {

  angular
  .module('dailyobjects')
  .controller('MainController', MainController)
  .controller('UserFollowersController',UserFollowersController)
  .controller('UserInfoController' , UserInfoController) ;

  UserInfoController.$inject = ['LocalStorage', 'QueryService' , 'CONSTANTS' , '$scope' ,'$location' , '$state' , '$stateParams'];
  MainController.$inject = ['LocalStorage', 'QueryService' , 'CONSTANTS' , '$scope' ,'$location' , '$state' ];
  UserFollowersController.$inject = ['LocalStorage', 'QueryService' , 'CONSTANTS' , '$scope' ,'$location' , '$state' , '$stateParams'] ;
  function UserInfoController(LocalStorage, QueryService ,constants ,$scope ,$location,$state,$stateParams) {
    console.log("here") ;
    
    function init(){
      QueryService.query('GET', constants.USER_DETAILS + $stateParams.id , {}, {})
        .then(function(userinfo) {
          console.log(userinfo);
          $scope.userinfo = userinfo.data;
        });
    }

    init() ;
  }

  function UserFollowersController(LocalStorage, QueryService ,constants ,$scope ,$location,$state,$stateParams){
    function init(){
      QueryService.query('GET', 'users/' + $stateParams.id + '/followers' , {}, {})
      .then(function(users) {
        console.log(users);
        $scope.users = users.data;
      });
    }

    init()
  }

  function MainController(LocalStorage, QueryService ,constants ,$scope ,$location,$state) {

    function init(){
      QueryService.query('GET', constants.USER_LIST, {}, {})
      .then(function(users) {
        console.log(users);
        $scope.users = users.data;
      });
    }


    $scope.search = function(){

      if($scope.userSearch.length == 0){
        $scope.users = $scope.initialUsers
        return ;
      }


      QueryService.query('GET', constants.SEARCH_USER + $scope.userSearch , {}, {})
      .then(function(searchUsers) {
        console.log(searchUsers);
        $scope.users = searchUsers.data.items;
      })
    }


    $scope.gerUserDetail = function(id){
      $state.go('userDeatails' , {id : id})
    }

    $scope.gerUserFollowers = function(id){
      $state.go('userFollowers',{id : id})
    }

    init()

  }


})();