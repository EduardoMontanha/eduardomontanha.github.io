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
            
            return;
        }
        
        setTimeout(function () {
            try {
                home.imageHover();
            } catch (e) {
                console.err(e);
            }
        }, 200);
    },
    
    preload: function () {
        'use strict';
        let images = new Array(),
            imgSrc = [
                "dev",
                "ma",
                "mu",
            ];
        
        for (let i = 0; i < imgSrc.length; i++) {
            images[i] = new Image();
            images[i].src = "img/home/" + imgSrc[i] + "-icon.png";
        }
    },
    
    init: function () {
        'use strict';
        //Only runs for devices where width is equal or bigger than 768px
        let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        
        if (width >= 768) {
            //Load images before the request function
            this.preload();
            //Change image when mouse is hover the link
            this.imageHover();
        }
    }
};

home.init();