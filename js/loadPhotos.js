$(document).ready(function(){
    
    $.ajax({
        type: "GET",
        url: "json/photos.json",
        beforeSend: function() {
            $("#photo-gallery").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#photo-gallery").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#photo-gallery").append(
                        '<img src="' + value.image + '" class="' + value.class + '" alt="' + value.alt + '" aria-label="' + value.alt + '"> ');
                })

            });
        }
    });
});