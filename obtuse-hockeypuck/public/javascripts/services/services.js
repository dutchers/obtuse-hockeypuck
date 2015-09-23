angular.module('stackOverCho.services', [])
  .factory('Register', ['$http', '$location', '$window', function ($http, $location, $window) {
    return {
      register: function (data) {
        return $http({
          method: 'POST',
          url: 'api/register',
          data: data
        }).then(function (res) {
          console.log(res);
          if (res.data === 'yes') {
            console.log(res.data);
            $location.pathname( "/" );
            return;
          }
        }, function (res) {
          if (res.data === 'no') {
            console.log(res.data);
            console.log('FAILURE!');
             $location.path( "/register" );
             return;
          }
        });
      }
    };
  }])
  .factory('Login', ['$http', '$location', function ($http, $location) {
    return {
      login: function (data) {
        return $http({
          method: 'POST',
          url: 'api/login',
          data: data
        }).then(function (res) {
          console.log(res.data);
          if(res.data === 'success') {
            $location.path('/');
          }
        });
      }
    };
  }])
  .factory('Answers', ['$http', function ($http) {
    return {
      sendAnswers: function (data) {
        return $http.post('/api/answers/', {
          data: data
        }).success(function(res) {console.log(res); }).error(function(err) { console.log(err) });
      },
      getAnswers: function (data) {
        return $http.get('/api/answers').success(function(res) {
          data.answers = res;
          return data;
        }).error(function (err) {
          console.log(err);
        });
      }
    };
  }])
  .factory('Questions', ['$http', '$location', function ($http, $location) {
    return {
      questions: function (data) {
        return $http({
          method: 'GET',
          url: 'api/questions',
          data: data
        }).then(function (res) {
          console.log(res.data);
          data.users = res.data;
          return data;
        });
      },
      ask: function (data) {
        return $http({
          url: 'api/questions/',
          method: 'POST',
          data: data
        }).then(function (res) {
          $location.path('/');
        });
      },
      getQuestion: function (question, data) {
        return $http({
          url: 'api/questions/' + question
        }).then(function (res) {
          data.question = res.data;

        });
      }
    };
  }])
  .factory('GetUser', ['$http', function($http){
    return {
      getUser: function (username, data) {
        return $http({
          url: 'api/users/' + username,
          method: 'GET'
        }).then(function (res) {
          data.questions = res.data;
          return data;
        });
      }
    };
  }]);