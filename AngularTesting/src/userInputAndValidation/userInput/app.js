"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController', [function(){
	
	this.listaFrutos = ['banana','pera','laranja','pessego'];
	
	this.user = {
			nome:'Filipe',
			frutaPeferida:'pera',
			isActive:true
	
	};
	
}]);


angular.module('myApp').filter('yesorno',function(){
	return function(value){
		if(value === true){
			return 'Sim';
		}else if(value === false){
			return 'Nao';
		}else{
			return 'Desconhecido';
		}
	};
});