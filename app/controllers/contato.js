app.controller('ContatoCtrl', function($rootScope, $location, $scope){
    $rootScope.activetab = $location.path('/contato');
    
    //Slider
    $scope.$on('$viewContentLoaded', function(){
        
    });
});