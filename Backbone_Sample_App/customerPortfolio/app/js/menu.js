/* Custom Menu */
define([
  'jquery',
  'bootstrap'
], function ($, bootstrap) {
    'use strict';

    var initialize = function () {

        /*$('a.afinav-grp-lnk, a.afinav-toggle-sub-menus').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
            $(this).parent().addClass('open');
        });*/
    };

    return { initialize: initialize };
}); //helper function close