let home = {
    
    imageHover: function () {
        'use strict';
        let $links = $("main a");
        
        if ($links.length) {
            
            let $this, id;
            
            $links.hover(function () {
                
                $this = $(this);
                id = $this.closest("section").attr("id");
                
                $this.find("source[media*='768px']").attr("srcset", function () {
                    return "img/home/" + id + "-icon.png";
                });
                
            }, function () {
                $this.find("source[media*='768px']").attr("srcset", function () {
                    return "img/home/" + id + "-icon-grey.png";
                });
            });
        }
        
        setTimeout(function () {
            try {
                home.imageHover();
            } catch (e) {
                console.err(e);
            }
        }, 200);
    },
    
    init: function () {
        'use strict';
        
        //Only runs for devices where width is equal or bigger than 768px
        let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        
        if (width >= 768) {
            //Change image when mouse is hover the link
            this.imageHover();
        }
    }
};

home.init();