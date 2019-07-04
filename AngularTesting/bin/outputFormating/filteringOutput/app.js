"use strict";

angular.module('myApp',[]);


angular.module('myApp').controller('MainController', [function(){

	this.items = [
		{name:'Bananas', type:'fruta'},
		{name:'Pera', type:'fruta'},
		{name:'Laranja', type:'fruta'},
		{name:'Morango', type:'fruta'},
		{name:'Galinha', type:'carne'},
		{name:'Vaca', type:'carne'},
		{name:'Arroz', type:'legume'},
		{name:'Batata', type:'legume'}
	];
	
	this.selectedType = '';
	
}]);