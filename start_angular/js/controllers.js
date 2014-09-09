var meusControllers = angular.module('startController', []);

meusControllers.controller('IndexController',
	['$scope',
		function($scope){

			$scope.descricao = '';

			$scope.minimoDeCaracteres = function(){
				return $scope.descricao.length < 10;
			};

			$scope.alertar = function(){
				alert('pegando!');
			};

}]);

meusControllers.controller('IndexController2',
	['$scope', 'IndexService',
		function($scope, IndexService){

			$scope.frutas = IndexService.retornarFrutas();

			$scope.calcularMedia = function(){
				$scope.media = ($scope.a + $scope.b) / 2;
			};

}]);

meusControllers.controller('IndexController3',
	['$scope', 'CalcularService',
		function($scope, CalcularService){
			$scope.calcularQuadradoNumero = function(numero){
				$scope.resultado = CalcularService.quadrado(numero);
			};

			$scope.calcularCuboNumero = function(numero){
				$scope.resultado = CalcularService.cubo(numero);
			};
}]);