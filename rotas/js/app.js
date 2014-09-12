(function(){
  'use strict';
  var app = angular.module('startAngular', ['startController', 'startService', 'ngRoute']);

  app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/', {controller:'ListController', templateUrl:'view/frutas/list.html'}).
    when('/editar/:nome', {controller:'EditarController', templateUrl:'view/frutas/form.html'}).
    when('/nova', {controller:'NovaController', templateUrl:'view/frutas/form.html'}).
    otherwise({redirectTo:'/'});
  }]);

  app.run(['$rootScope', function($rootScope){
    $rootScope.frutas = ['Maçã', 'Uva', 'Melancia'];
  }]);

})();