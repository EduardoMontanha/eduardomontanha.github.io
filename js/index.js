/* globals $, document, window */

var home = {
    $menu: null,
    
    collapsedMenu: function () {
        'use strict';
        $("#burger").click(function () {
            if (home.$menu.is(":visible")) {
                home.$menu.hide();
            } else {
                home.$menu.show();
            }
        });
    },
    
    smoothScroll: function () {
        'use strict';
        $("a").on('click', function (event) {
            //Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "" && this.hash !== "#!") {
                
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
            
            //Hide menu when a menu item is clicked
            if ($(this).hasClass("menuItem")) {
                home.$menu.hide();
            }
        });
    },
    
    init: function () {
        'use strict';
        home.$menu = $("#menu");
        
        this.collapsedMenu();
        this.smoothScroll();
    }
};

$(document).ready(function () {
    home.init();
});