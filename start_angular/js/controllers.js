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
	['$scope', 'IndexService', 'MediaFactory',
		function($scope, IndexService, MediaFactory){

			$scope.frutas = IndexService.retornarFrutas();

			$scope.calcularMedia = function(){
				$scope.media = MediaFactory.calcularMediaAlias($scope.a, $scope.b);
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

meusControllers.controller('ContatoController',
	['$scope', 'ContatoService',
		function($scope, ContatoService){

    $scope.contatos = ContatoService.list();
 	$scope.contato = {};

    $scope.salvarContato = function () {
        ContatoService.save($scope.contato);
        $scope.contato = {};
    }
 
 
    $scope.deletar = function (id) {
        ContatoService.delete(id);
        if ($scope.contato.id == id) $scope.contato = {};
    }
 
 
    $scope.editar = function (id) {
        $scope.contato = angular.copy(ContatoService.get(id));
    }
}]);