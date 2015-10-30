/* Custom Menu */
define([
  'jquery',
  'bootstrap'
], function ($, bootstrap) {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        setIFrameSize();

        $(window).resize(function () {
            setIFrameSize();
        });
        function setIFrameSize() {
            var content_height = $(window).height() - 80;
            var content_width = $(window).width();
            if (document.getElementById('subapp_frame') != null) {
                document.getElementById('subapp_frame').style.height = content_height + "px";
            }
            if (document.getElementById('subapp_frame') != null) {
                document.getElementById('subapp_frame').style.width = content_width + "px";
            }

        }
    });
    return true;
}); //helper function close
