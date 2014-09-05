var meusControllers = angular.module('startController', []);

meusControllers.controller('IndexController',
	['$scope', 
		function($scope){

			$scope.descricao = '';

			$scope.minimoDeCaracteres = function(){
				return $scope.descricao.length < 10;
			}

			$scope.alertar = function(){
				alert('pegando!');
			}

}]);

meusControllers.controller('IndexController2',
	['$scope',
		function($scope){

			$scope.calcular = function(){
				$scope.media = (parseInt($scope.a) + parseInt($scope.b)) / 2;
			}

}]);