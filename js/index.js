/* globals $, document, window */

var home = {
    $body: null,
    $menu: null,
    
    collapsedMenu: function () {
        'use strict';
        $("#burger").click(function () {
            if (home.$menu.is(":visible")) {
                home.$menu.hide();
                home.$body.removeClass("disableScroll");
            } else {
                home.$menu.show();
                home.$body.addClass("disableScroll");
            }
        });
    },
    
    emailSent: function (success) {
        'use strict';
        var $emailContainer = $("aside"),
            $emailBox = $emailContainer.find("section"),
            closeModal = function () {
                $emailContainer.hide();
                home.$body.removeClass("disableScroll");
            };
        
        if (success) {
            $(".errorMessage").hide();
        } else {
            $(".successMessage").hide();
        }
        
        //Close modal
        $emailBox.find("a").click(closeModal);
        
        //Show email sent message
        $emailContainer.show();
        home.$body.addClass("disableScroll");
    },
    
    smoothScroll: function () {
        'use strict';
        $("a").on('click', function (event) {
            //Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "" && this.hash !== "#!") {
                
                event.preventDefault();
                
                var hash = this.hash;
                
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800);
            }
            
            //Hide menu when a menu item is clicked
            if ($(this).hasClass("menuItem")) {
                home.$menu.hide();
                home.$body.removeClass("disableScroll");
            }
        });
    },
    
    init: function () {
        'use strict';
        //Globals
        home.$body = $("body");
        home.$menu = $("#menu");
        
        //Methods
        this.collapsedMenu();
        this.smoothScroll();
    }
};

$(document).ready(function () {
    home.init();
});