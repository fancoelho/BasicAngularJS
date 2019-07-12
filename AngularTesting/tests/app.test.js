var TestService;

describe('TestService',function(){
	beforeEach(module('myApp'));
	
	beforeEach(inject(function(_TestService_){
		TestService  = _TestService_;
	}));
	
	it('deve retornar dados',function(){
		expect(TestService.getData()).toEqual("xyz123");
	});
});