define([
  'jquery',
  'underscore',
  'backbone',
  //'../collections/avdatacollection',
  'text!templates/containerdatamodel.html'
], function ($, _, Backbone,  AccountViewTpl) {
    var accountview = Backbone.View.extend({
        el: $("#av-container"),
        id: 'av-container',
        initialize: function() {
            //listening collection add, sort event
            //var avDataCollection = new AVDataCollection();
            console.log("Collection is" +  this.collection);
            this.render();
            this.collection.on('sort', this.render, this);
        },
        events: {
            'click .glyphicon': 'glyphIconEvent',
            'click #av-account-value-sort' : 'sortByAccountValue',
            'click #av-account-plan-sort' : 'sortByAccountPlan',
            'click #av-account-owners-sort' : 'sortByAccountOwners',
            'click #av-account-reset-sort' : 'sortByAccountProduct'
        },
        glyphIconEvent: function (e) {
            var $this = $(e.currentTarget);
            //var $this = $(this);
            if ($this.hasClass("av-down-angle")) {
                $this.removeClass("av-down-angle").addClass("av-up-angle").addClass("act");
            }
            else if ($this.hasClass("av-up-angle")) {

                $this.removeClass("av-up-angle").removeClass("act").addClass("av-down-angle");
            }
        },
        sortByAccountValue: function(e) {
            
            this.collection.sortAttribute = "av_value";
            this.collection.sortAsc = !this.collection.sortAsc;
            this.collection.sort();

        },
        sortByAccountPlan: function(e) {

            this.collection.sortAttribute = "av_plan";
            this.collection.sortAsc = !this.collection.sortAsc;
            this.collection.sort();

        },
        sortByAccountOwners: function(e) {

            this.collection.sortAttribute = "av_owners";
            this.collection.sortAsc = !this.collection.sortAsc;
            this.collection.sort();

        },
        sortByAccountProduct: function(e) {

            this.collection.sortAttribute = "av_product_name";
            this.collection.sortAsc = true;
            this.collection.sort();

        },

        render: function () {
                var that = this;
                //var avDataCollection = this.collection;
                var avDataCollection = this.collection;
                var avCollectionLength =avDataCollection.length;
                var tmpTemplate = _.template(AccountViewTpl, {avDataCollection: avDataCollection.models, avCollectionLength:avCollectionLength});
                that.$el.html(tmpTemplate);
                     
        }
    });
    return accountview;
});