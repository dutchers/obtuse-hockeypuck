angular.module('stackOverCho', ['stackOverCho.questions', 'stackOverCho.login', 'stackOverCho.register', 'stackOverCho.ask', 'stackOverCho.user', 'stackOverCho.question', 'stackOverCho.services', 'ngRoute'])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'javascripts/questions/questions.html',
        controller: 'QuestionsController'
      })
      .when('/login', {
        templateUrl: 'javascripts/login/login.html',
        controller: 'LoginController'
      })
      .when('/register', {
        templateUrl: 'javascripts/register/register.html',
        controller: 'RegisterController'
      })
      .when('/ask', {
        templateUrl: 'javascripts/ask/ask.html',
        controller: 'AskController'
      })
      .when('/users/:user_id', {
        templateUrl: 'javascripts/user/user.html',
        controller: 'UserController'
      })
      .when('/questions/:question', {
        templateUrl: 'javascripts/question/question.html',
        controller: 'QuestionController'
      });
  });

