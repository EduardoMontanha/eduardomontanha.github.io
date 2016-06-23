var app = angular.module('aamf', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    
    $routeProvider
        //Homepage
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        })
        //Sobre
        .when('/sobre', {
            templateUrl: 'app/views/sobre.html',
            controller: 'SobreCtrl'
        })
		//Galeria
        .when('/galeria', {
            templateUrl: 'app/views/galeria.html',
            controller: 'GaleriaCtrl'
        })
        //Contact
        .when('/contato', {
            templateUrl: 'app/views/contato.html',
            controller: 'ContatoCtrl'
        })
        .otherwise({redirectTo: '/'});
    
    //Removes # from url
    $locationProvider.html5Mode(true);
});