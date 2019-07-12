"use strict";

angular.module('myApp',[]);



angular.module('myApp').service('TestService',function(){

		var _data = "xyz123";
		this.getData = function(){
			return _data;
		};
});


angular.module('myApp').controller('MainController', ['TestService',function(TestService){
	

	this.model = TestService;
	
	this.getData = function(){
		this.data = this.model.getData(); 
	};
	
}]);