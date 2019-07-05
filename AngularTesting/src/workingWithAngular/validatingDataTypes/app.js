"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController', [function(){

	this.data = [1,2,3]
	
	this.results = [];
	
	var isObject = 'Is Object? '+angular.isObject(this.data);
	var isArray = 'Is Array? '+angular.isArray(this.data);
	var isString = 'Is Object? '+angular.isString(this.data);
	var isNumber = 'Is Object? '+angular.isNumber(this.data);
	var isDate = 'Is Object? '+angular.isDate(this.data);
	var isElement = 'Is Object? '+angular.isElement(this.data);
	var isDefined = 'Is Object? '+angular.isDefined(this.data);
	var isUndefined = 'Is Object? '+angular.isUndefined(this.data);
	
	this.results.push(isObject,isArray,isString,isNumber,isDate,isElement,isDefined,isUndefined);
	
	
	
}]);

