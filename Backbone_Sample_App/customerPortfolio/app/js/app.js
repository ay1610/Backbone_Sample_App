// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router' // Request router.js 
], function ($, _, Backbone, Router) {
    var initialize = function () {
        // Pass in our Router module and call it's initialize function
        Backbone.View.prototype.close = function () {
            // console.log('Closing view ' + this);
            if (this.beforeClose) {
                this.beforeClose();
            }
            this.undelegateEvents();
            $(this).empty;
            this.unbind();
        };
        Router.initialize();
    };
    return { initialize: initialize };
});
