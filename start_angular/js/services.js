var meusServices = angular.module('startService', []);

meusServices.service('IndexService', [function(){

	var frutas = ['Maçã','Uva','Melancia'];

	this.retornarFrutas = function(){
		return frutas;
	};

}]);

meusServices.service('OperacoesService', [function(){

	this.somar = function(a, b){
		return a + b;
	};

	this.subtrair = function(a, b){
		return a - b;
	};

	this.multiplicar = function(a, b){
		return a * b;
	};

	this.dividir = function(a, b){
		return a / b;
	};

}]);

meusServices.service('CalcularService', ['OperacoesService', function(OperacoesService){

	this.quadrado = function(num){
		return OperacoesService.multiplicar(num, num);
	};

	this.cubo = function(num){
		return OperacoesService.multiplicar(num, OperacoesService.multiplicar(num, num));
	};
	
}]);