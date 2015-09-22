angular.module('stackOverCho.ask', [])
  .controller('AskController', ['$scope', 'Ask', function ($scope, Ask) {
    $scope.data = {};
    $scope.ask = function () {
      Ask.ask($scope.data);
    };
  }]);