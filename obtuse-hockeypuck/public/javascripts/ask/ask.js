angular.module('stackOverCho.ask', [])
  .controller('AskController', ['$scope', 'Questions', function ($scope, Questions) {
    $scope.data = {};
    $scope.ask = function () {
      Questions.ask($scope.data);
    };
  }]);