var meusControllers = angular.module('startController', []);

meusControllers.controller('ListController',
	['$scope',
		function($scope){
			$scope.titulo = 'Lista de Frutas';
}]);

meusControllers.controller('NovaController',
	['$scope', '$location', 
		function($scope, $location){
			$scope.titulo = 'Nova Fruta';
			$scope.fruta = '';

			$scope.salvar = function(){
				$scope.frutas.push($scope.fruta);
				$location.path('/');
			};

}]);

meusControllers.controller('EditarController',
	['$scope', '$routeParams', '$location',
		function($scope, $routeParams, $location){
			$scope.titulo = 'Editar de Fruta';
			$scope.fruta = $routeParams.nome;

			var i = $scope.frutas.indexOf($routeParams.nome);

			$scope.salvar = function(){
				$scope.frutas[i] = $scope.fruta;
				$location.path('/');
			};

}]);