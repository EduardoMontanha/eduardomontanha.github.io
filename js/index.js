/* globals $, document, window */

var behaviors = {
    smoothScroll: function () {
        'use strict';
        $("a").on('click', function (event) {
            //Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                
                event.preventDefault();
                
                //Store hash
                var hash = this.hash;
                
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    //Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    },
    
    init: function () {
        'use strict';
        this.smoothScroll();
    }
};

$(document).ready(function () {
    behaviors.init();
});