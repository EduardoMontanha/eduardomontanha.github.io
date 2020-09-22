/*----------------------------------------------
*
* [Admin Scripts]
*
* Theme    : Leverage
* Version  : 1.1.0
* Author   : Codings
* Support  : adm.codings@gmail.com
* 
----------------------------------------------*/

/*----------------------------------------------

[ALL CONTENTS]

1. ACF
2. OCDI

----------------------------------------------*/

/*----------------------------------------------
1. ACF
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    let docs = 'https://leverage.codings.dev/docs.php?v=wordpress';

    $('a[href="admin.php?page=theme-settings-support"]').attr('href', docs).attr('target', '_blank');
})

/*----------------------------------------------
1. ACF
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    function updateIcon(timeout) {
        setTimeout(function() {
            let item = $('.select2-results__option');
            item.each(function() {          
                let value = $(this).text();
                $(this).addClass('leverage-icon-item').html('<i class="icon-'+value+'" title="'+value+'"></i>'+value);
            })
        }, timeout)
    }

    $( document ).on( 'select2:opening', '.leverage-icon select', function() {
        updateIcon(100);
        updateIcon(800);
        updateIcon(1600);
    })

    $(document).on('keyup', '.select2-search__field', function () {
        updateIcon(100);
        updateIcon(800);
        updateIcon(1600);
    })
})

/*----------------------------------------------
2. OCDI
----------------------------------------------*/

jQuery(function ($) {

    'use strict';
    
    $('.ocdi a[href="#multi-page"]').click();

})