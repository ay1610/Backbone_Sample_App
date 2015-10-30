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

/*** Container Data View*/
var ContainerData = Backbone.View.extend({

    initialize: function() {
    	/*console.log("Data View Triggered");*/
        $(window).on("resize", this.resizeCollapse);
        this.render();
    },
render: function() {
    var that = this;
    var avDataCollection = new AVDataCollection();
    avDataCollection.fetch({
        success: function(avDataCollection) {
            var avCollectionLength =avDataCollection.length;
            $.get('templates/containerdatamodel.html', function(data) {
                var template = _.template(data, {avDataCollection: avDataCollection.models, avCollectionLength:avCollectionLength});
                that.$el.html(template);
            }, 'html');
        }
    });


        
    },
    events: {
        "click .btns": "doTransition"/*,
        "click .sorting" : "modifySorting"*/
    },
    doTransition: function(ev) {
        var $this = $(ev.currentTarget);
        //var $thisSpan = $this.find('span.')
        var $that = $(this);

        if ($this.hasClass("av-down-angle")) {

            $this.removeClass("av-down-angle").addClass("av-up-angle").addClass("act");

            $(".btns").each(function () {

                if (!$this.is($(this)) && $(this).hasClass("act")) {
                    if ($(this).hasClass("av-up-angle")) {
                        $(this).trigger("click");
                        $(this).removeClass("av-up-angle").removeClass("act").addClass("av-down-angle");
                    }
                }

            })
        }
        else if ($this.hasClass("av-up-angle")) {

            $this.removeClass("av-up-angle").removeClass("act").addClass("av-down-angle");
        }
    },
    modifySorting: function(ev) {
        var $this = $(ev.currentTarget);
        //$thisSpan = $this.find('span.sorting');
        var $that = $(this);

        if(!$this.hasClass("reset-sorting")){
            if ($this.hasClass("av-down-angle")) {

                $this.removeClass("av-down-angle").addClass("av-up-angle").addClass("act");
            }
            else if ($this.hasClass("av-up-angle")) {

                $this.removeClass("av-up-angle").addClass("av-down-angle").addClass("act");
            }
            else {
                $this.addClass("av-down-angle").addClass("act");
            } 
        }       

         $(".sorting").each(function () {
            //console.log("Here this is " $(this));

                //var $innerThisSpan = $(this).find('span.sorting');
                //console.log("Here this span is " $innerThisSpan);
                if (!$this.is($(this)) && $(this).hasClass("act")) {
                    if ($(this).hasClass("av-up-angle")) {
                        //$(this).trigger("click");
                        $(this).removeClass("av-up-angle").removeClass("act");
                    }
                    if ($(this).hasClass("av-down-angle")) {
                        //$(this).trigger("click");
                        $(this).removeClass("av-down-angle").removeClass("act");
                    }

                }

            })
        

    },
    resizeCollapse: function() {
    if ($(window).width() >= 768) {
        $(".btns").each(function() {
            if ($(this).hasClass("av-up-angle")) {
                $(this).trigger("click");
                $(this).removeClass("av-up-angle").removeClass("act").addClass("av-down-angle");
            }

        })
    }
}
});
var containerData = new ContainerData({el: $("#av-container")});

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