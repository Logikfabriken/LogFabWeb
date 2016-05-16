(function ($) {

    var instagramUrl = "https://www.instagram.com/logikfabriken/media/?callback=setInstagramImage";

    function setInstagramImage(media) {
        var item = media.items[0];

        var caption = item.caption.text;
        var username = item.user.full_name;
        var userpicture = item.user.profile_picture;
        var createdtime = item.created_time;
        var image = item.images.standard_resolution.url;

        var container = $("#instagram-container");
        var imageElement = $(".instagram-image", container);
        var userImageElement = $(".instagram-user", container);
        var userTextElement = userImageElement.next("span");


        imageElement.attr("src", image);
        userTextElement.text(username);
        userImageElement.attr("src", userpicture);

    }


    $.ajax({
        url: instagramUrl,
        type: 'GET',
        crossDomain: true,
        success: function(media) {
            setInstagramImage(media);
        },
        error: function (error) {
            var err = error;

        }
    });








})(jQuery)