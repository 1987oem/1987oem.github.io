$(function () {
    var $idea = $("#idea").val();
    var $url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + $idea + "&locale=en_US&safesearch=moderate&amount=3";
    console.log($url);
    $.ajax({
        type: "GET",
        url: $url,
        dataType: 'json',
        success: Render
    });


    $("#getItem").click(function (e) {
        e.preventDefault();
        var $idea = $("#idea").val();
        var $url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + $idea + "&locale=en_US&safesearch=moderate&amount=3";
        console.log($url);
        $.ajax({
            type: "GET",
            url: $url,
            dataType: 'json',
            success: Render
        });
    });

    $("#idea").on("keypress", function(event) {
        if(event.which==13) {
            event.preventDefault();
            var $idea = $("#idea").val();
            var $url = "https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag=" + $idea + "&locale=en_US&safesearch=moderate";
            console.log($url);
            $.ajax({
                type: "GET",
                url: $url,
                dataType: 'json',
                success: Render
            });
        }
        $(".grid").masonry({
            itemSelector:'.grid-item',
            columnWidth: 10
        });
    });
});