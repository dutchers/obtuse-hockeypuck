angular.module('stackOverCho.user', [])
  .controller('UserController', ['$scope', '$routeParams', 'GetUser' , function($scope, $routeParams, GetUser) {
    $scope.user_id = $routeParams.user_id;
    $scope.data = {};

    $scope.getUser = function () {
      GetUser.getUser($scope.user_id, $scope.data);
    };

    $scope.getUser();

    console.log($scope.user_id);
  }]);