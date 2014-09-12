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

meusServices.factory('MediaFactory', [function(){
	
	function calcularMedia(num1, num2){
		return (num1 + num2) / 2;
	}

	return {
		calcularMediaAlias : calcularMedia
	};

}]);

meusServices.service('ContatoService',
	[function(){
		    //to create unique contact id
    var uid = 1;
     
    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'nome': 'Viral',
            'email': 'hello@gmail.com',
            'telefone': '123-2343-44'
    }];
     
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }
 
    }
 
    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
 
    }
     
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }
 
    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }

}]);