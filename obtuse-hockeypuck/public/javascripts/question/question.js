angular.module('stackOverCho.question', [])
  .controller('QuestionController', ['$scope', '$routeParams', 'Questions',function ($scope, $routeParams, Questions) {
    $scope.question = $routeParams.question;
    $scope.data = {};
    $scope.getQuestion = function () {
      Questions.getQuestion($scope.question, $scope.data);
    };
    $scope.getQuestion();
  }]);