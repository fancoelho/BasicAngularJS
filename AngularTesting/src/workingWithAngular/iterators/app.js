"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController', [function($q,RandomNameService){

	var vm = this;
	
	var greetings = ['Hey','Ola','Salut','Hola','Que pasa'];
	var names = ['Filipe','Joao','Duarte','Maria'];
	
	
	vm.greetingSentences = [];
	
	angular.forEach(names,function(name){
		var randomGreeting = greetings[Math.floor(Math.random()*greetings.length)];
		var sentence = randomGreeting + ' '+ name;
		vm.greetingSentences.push(sentence);
	});
	
	
}]);

