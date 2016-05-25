(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        //$('.parallax').parallax();
        //$('.scrollspy').scrollSpy();

        $(".full-height").height(window.height - $(".navbar-fixed").height());

        $("nav a, [data-rel='navigation']").click(function (e) {
            var link = $(this);
            var anchor = link.attr("href");
            if (anchor != "#") {
                var target = $(anchor);
                var targetPosition = $(target).position().top;

                targetPosition -= 80;

                if (anchor == "#start") {
                    targetPosition = 0;
                }

                $('html, body').animate({ scrollTop: targetPosition }, 400, "easeOutCubic");
                e.preventDefault();
                e.stopPropagation();
            }
        });

    });
})(jQuery);