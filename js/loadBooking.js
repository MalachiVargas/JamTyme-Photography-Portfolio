$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "json/book.json",
        beforeSend: function() {
            $("#bookingClient").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#bookingClient").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#bookingClient").append('<li><span class="' +
                        value.icon + '"></span><h3>' +
                        value.title + '</h3><p>' +
                        value.text + '</p></li>');
                })

            });
        }
    });
});