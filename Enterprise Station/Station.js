$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("body").append("<div id=\"toTop\" style=\"border:1px solid #444;border-radius: 2px;background:#333;color:#fff;text-align:center;padding:6px 10px 0px 10px;position:fixed;bottom:30px;right:30px;cursor:pointer;display:none;font-family:verdana;font-size:22px;\">^</div>");
    $("#toTop").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 10);
    });
})