define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header.html',
  'text!templates/footer.html'

], function ($, _, Backbone, AVHeaderTemplate, AVFooterTemplate) {
/*** Header Data View*/
var HeaderData = Backbone.View.extend({

    initialize: function() {
    	/*console.log("Data View Triggered");*/
        this.render();
    },

    render: function() {
    	var that = this;
    	$.get('templates/header.html', function(data){
    		 var template = _.template(data, {});
    		 that.$el.html(template);
    	}, 'html');
       
        
    }

});
var headerData = new HeaderData({el: $("#av-index-header")});

/*** Footer Data View*/
var FooterData = Backbone.View.extend({

    initialize: function() {
        $(window).on("scroll", this.fadeArrow);
        this.render();
    },

    render: function() {
        var that = this;
        $.get('templates/footer.html', function(data){
             var template = _.template(data, {});
             that.$el.html(template);
        }, 'html');
       
        
    },
    events: {
        'click .glyphicon-chevron-up': 'backToTop'
    },
    backToTop: function(){
        $("body,html").animate({
                scrollTop: 0
            }, 800);
            return false;
    },
    fadeArrow: function(){
        if ($(window).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
    }

});
var footerData = new FooterData({el: $("#av-index-footer")});
});