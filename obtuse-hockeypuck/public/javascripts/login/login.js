angular.module('stackOverCho.login', [])
  .controller('LoginController', ['$scope', 'Login', function($scope, Login){
    $scope.data = {};
    $scope.login = function () {
      Login.login($scope.data);
    };
  }]);