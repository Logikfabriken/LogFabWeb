(function ($) {

    var container = $("#instagram-container");
    var preloader = $(".preloader-wrapper", container);

    $.ajax({
        url: "/instagram-feed",
        type: 'GET',
        success: function(html) {
            preloader.removeClass("active");
            container.append(html);
        },
        error: function (error) {
            var err = error;
            preloader.removeClass("active");
        }
    });


})(jQuery)