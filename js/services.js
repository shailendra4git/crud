'use strict';

angular.module('nodeNg')
    .factory('serverApiFactory', ['$http', serverApiFactory])
    
function serverApiFactory($http) {
    return {        
        login: function (userName, password) {
            return $http.post('/login?username=' + userName + '&password=' + password);
        },

        createUser: function (userObj) {
            return $http.post('/create/?username=' + userName);
        },
        
        getUsers: function () {
            return $http.get('https://jsonplaceholder.typicode.com/users');
        },

        updateUser: function (userId, userName) {
            return $http.put('/update/?id=' + userId + '&username=' + userName);
        },

        deleteUser: function (userId) {
            return $http.delete('/delete/?id=' + userId);
        }
    }
}
