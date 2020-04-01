//Smooth scroll
$(window).on('load', function () {
    $(document).on('click', 'nav .navbar-nav .nav-link, #menu .nav-link', function (e) {
        e.preventDefault();

        let elementId = $(this).attr("href"),
            element = $(elementId),
            elementTop = element.position().top;

        window.scroll({
            top: elementTop,
            left: 0,
            behavior: 'smooth'
        });
    })
})