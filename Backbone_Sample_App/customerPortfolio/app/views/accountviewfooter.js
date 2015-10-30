define([
  'jquery',
  'underscore',
  'backbone',  
  'text!templates/footer.html',  
], function ($, _, Backbone,footerTemplate) {

    var accountviewfooter = Backbone.View.extend({
        el: $("#av-index-footer"),
        id: 'afinav-foooter',       
        render: function () {
            var tmpTemplate = _.template(footerTemplate);
            this.$el.html(tmpTemplate);
        },
        events: {
        'click .glyphicon-chevron-up': 'backToTop'
    },
    backToTop: function(){
        $("body,html").animate({
                scrollTop: 0
            }, 800);
            return false;
    }
    });
    return accountviewfooter;
});