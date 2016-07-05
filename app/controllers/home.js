app.controller('HomeCtrl', function($rootScope, $location, $scope){
    $rootScope.activetab = $location.path('/');
    
    //Slider
    $scope.$on('$viewContentLoaded', function(){
        var imageCount = 1,
            total = 3;

        function slideTo(val){
            var image = document.getElementById("image-displayer");
            imageCount = imageCount + val;

            if(imageCount > total)
                imageCount = 1;
            else if(imageCount < 1)
                imageCount = total;

            image.src = "img/slider/image" + imageCount + ".jpg";
        }

        var leftArrow = document.getElementById("left-arrow"),
            rightArrow = document.getElementById("right-arrow");

        leftArrow.addEventListener("click", function(){ slideTo(-1); }, false);
        rightArrow.addEventListener("click", function(){ slideTo(1); }, false);
    });
});