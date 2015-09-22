angular.module('stackOverCho', ['stackOverCho.questions', 'stackOverCho.login', 'stackOverCho.register', 'stackOverCho.ask', 'stackOverCho.services', 'ngRoute'])
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
      });
  });

