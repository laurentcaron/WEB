$("#contact-form").submit(function() {
    $.ajax({
        url: "//formspree.io/laurent.caron@polymtl.ca",
        method: "POST",
        data: { _subject: "Nouveau message de " + $("#name").val(),
                nom:      $("#name").val(),
                _replyto: $("#email").val(),
                _gotcha:  $("#gotcha").val(),
                message:  $("#message").val() },
        dataType: "json"
    });

    $("#contact-form").collapse();
    $("#feedback").fadeIn(50);

    return false;
});
