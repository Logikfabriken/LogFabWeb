$(document).ready(function () {
    $('.parallax-box').each(function () {
        var bgobj = $(this);

        $(window).scroll(function () {

            if ($(window).scrollTop() >= $(bgobj).position().top - $(window).height()) {


                var o = $(window).scrollTop() - $(bgobj).position().top;

                var yPos = o / bgobj.data('speed');

                // Put together our final background position
                var coords = '50% ' + yPos + 'px';

                // Move the background
                bgobj.css({ backgroundPosition: coords });
            }
        });
    });
});