angular.module('stackOverCho.questions', [])
  .controller('QuestionsController', ['Questions', function($scope, Questions){
    $scope.data = {};
    $scope.questions = function () {
      Questions.questions($scope.data);
    };

    $scope.questions();
  }]);

