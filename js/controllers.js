'use strict';

angular.module('nodeNg')

.controller('LoginCtrl', ['$scope', '$state', 'serverApiFactory', LoginCtrl])

.controller('HomeCtrl', ['$scope', '$state', 'serverApiFactory', HomeCtrl]);

function LoginCtrl($scope, $state, serverApiFactory) {
    let vm = this;

    vm.userObj = {};

    vm.login = function(){
        console.log("hi", vm.userObj);
        $state.go("home")        
	}	
}

function HomeCtrl($scope, $state, serverApiFactory) {
	let vm = this;
	
	vm.createUserObj = {};

	vm.createUser = function(){
		console.log("create user ", vm.createUserObj);
		// serverApiFactory.createData(userName).then(function(response){
		// 	vm.usersObj = response.data.users;			
		// }, function(error){
		// 	console.log(error)
		// });
	}

	serverApiFactory.getUsers().then(function(response){
		vm.userObj = response.data;
	}, function(error){
		console.log(error)
	});

	vm.updateModal = function(userId){
		vm.userDetails = {};
		
		let user = vm.userObj.filter(user => {
			return user.id == userId
		});

		vm.userDetails = user[0];
	}

	vm.updateUser = function(){
		console.log("update user ", vm.userDetails);
		// serverApiFactory.updateData(userId, userName).then(function(response){
		// 	vm.usersObj = response.data.users;
		// }, function(error){
		// 	console.log(error)
		// });
	}

	vm.deleteModal = function(userId){
		vm.userDetails = {};
		
		let user = vm.userObj.filter(user => {
			return user.id == userId
		});

		vm.userDetails = user[0];
	}

	vm.deleteUser = function(){
		console.log("delete user ", vm.userDetails.name);
		// serverApiFactory.deleteData(userId).then(function(response){
		// 	vm.usersObj = response.data.users;			
		// }, function(error){
		// 	console.log(error)
		// });
	}
}