(function ($) {


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
        var textElement = $(".instagram-text", container);

        imageElement.attr("src", image);

        userTextElement.text(username);
        userImageElement.attr("src", userpicture);

        var date = new Date(new Date() - new Date(parseInt(item.caption.created_time, 10) * 1000)).getDate();


        textElement.html("<strong>" + caption + "</strong> för " + date + " " + (date > 1 ? "dagar" : "dag") + " sedan");
    }


    $.ajax({
        url: "api/instagram",
        type: 'GET',
        success: function(media) {
            setInstagramImage(media);
        },
        error: function (error) {
            var err = error;

        }
    });








})(jQuery)