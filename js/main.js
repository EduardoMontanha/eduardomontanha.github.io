var main = {
    responsiveMenu: function () {
        'use strict';
        $("#btnMenu").click(function () {
            var $menu = $("#menu");
            
            if ($menu.is(":visible")) {
                $menu.slideUp("fast");
            } else {
                $menu.slideDown("fast");
            }
        });
    },
    
    init: function () {
        'use strict';
        
        $(document).ready(function () {
            main.responsiveMenu();
        });
    }
};

main.init();