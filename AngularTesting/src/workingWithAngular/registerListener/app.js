"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController', ['$scope',function($scope){

	var vm = this;
	
	vm.specialName = 'David Jones';
	vm.message = '';
	vm.nome = 'John Doe';
	
	$scope.$watch('main.nome',function(newValue,oldValue){
		console.log('newValue:', newValue,'oldValue:',oldValue );
		
		if(newValue == vm.specialName){
			vm.message = 'Hello! We\'ve waiting for you.';
		}else{
			vm.message ='';
		}	
	});
	
}]);

