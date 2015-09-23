angular.module('stackOverCho.answers', [])
  .controller('AnswersController', ['$scope', '$location', 'Answers', function($scope, $location, Answers){
    $scope.qid = $location.path().split("/")[2];
    $scope.data = {};
    $scope.data.questionId = $scope.qid;
    $scope.results = {};
    // $scope.results.questionId = $scope.qid;
    $scope.getAnswers = function () {
      Answers.getAnswers($scope.results);
    };
    $scope.sendAnswers = function () {
      Answers.sendAnswers($scope.data);
    };
    $scope.getAnswers();
  }]);