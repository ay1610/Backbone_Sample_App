/* Custom Menu */
define([
  'jquery',
  'bootstrap'
], function ($, bootstrap) {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTops').fadeIn();
            } else {
                $('.scrollToTops').fadeOut();
            }
        });
        $(window).resize(function () {
            if ($(window).width() >= 768) {
                $(".glyphicon").each(function () {
                    if ($(this).hasClass("av-up-angle")) {
                        $(this).trigger("click");
                        $(this).removeClass("av-up-angle").removeClass("act").addClass("av-down-angle");
                    }

                })
            }
        });
       
    });


    return true;
}); //helper function close
