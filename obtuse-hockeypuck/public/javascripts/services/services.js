angular.module('stackOverCho.services', [])
  .factory('Register', ['$http', '$location', '$window', function ($http, $location, $window) {
    return {
      register: function (data) {
        return $http.post('/api/register', {
          data: data
        }).then(function (res) {
          console.log(res);
          if (res.data === 'yes') {
            console.log(res.data);
            $window.location.pathname( "/" );
          }
        }, function (res) {
          if (res.data === 'no') {
            console.log(res.data);
            console.log('FAILURE!');
             $location.path( "/register" );
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
          url: '/api/login',
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
  .factory('Ask', ['$http', function ($http) {
    return {
      ask: function (data) {
        return $http({
          url: '/api/questions',
          method: 'POST',
          data: data
        }).then(function (res) {
          console.log(res);
        });
      }
    };
  }])
  .factory('Questions', ['$http', function ($http) {
    return {
      questions: function (data) {
        return $http({
          method: 'GET',
          url: 'api/questions',
          data: data
        }).then(function (res) {
          console.log(res);
          data.users = res.data;
          return data;
        });
      }
    };
  }])