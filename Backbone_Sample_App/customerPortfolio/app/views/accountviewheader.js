define([
  'jquery',
  'underscore',
  'backbone',  
  'text!templates/header.html',  
], function ($, _, Backbone, headerTemplate) {

    var accountviewheader = Backbone.View.extend({
        el: $("#av-index-header"),
        id: 'afinav-container',       
        render: function () {
            var tmpTemplate = _.template(headerTemplate);
            this.$el.html(tmpTemplate);
        }
    });
    return accountviewheader;
});