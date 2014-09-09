(function(){
  'use strict';
  var app = angular.module('startAngular', ['startController', 'startService']);

  app.run(['$rootScope', function($rootScope){
  	$rootScope.usuarios = [
  		{nome: 'Pauloooo', matricula: 90292892},
		  {nome: 'João', matricula: 938938393},
		  {nome: 'Maria', matricula: 62683638},
		  {nome: 'José', matricula: 727292773}
  	];
  }]);

})();