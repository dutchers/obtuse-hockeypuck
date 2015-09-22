angular.module('stackOverCho.register', [])
  .controller('RegisterController', ['$scope', 'Register', function($scope, Register){
    $scope.data = {};
    $scope.register = function () {
      Register.register($scope.data);
    };

  }]);