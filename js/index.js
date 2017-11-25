/* globals $, document, window */

var behaviors = {
    collapsedMenu: function () {
        'use strict';
        var $menu = $("#menu");
        
        $("#burger").click(function () {
            if ($menu.is(":visible")) {
                
                $menu.hide();
            } else {
                $menu.show();
            }
        });
    },
    
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
        this.collapsedMenu();
        this.smoothScroll();
    }
};

$(document).ready(function () {
    behaviors.init();
});