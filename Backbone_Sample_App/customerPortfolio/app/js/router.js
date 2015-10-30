// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'accountviewcommon',
  '../views/accountviewheader',
  '../views/accountviewfooter',
  '../collections/avdatacollection',
  '../views/accountview'
], function ($, _, Backbone, AccountViewCommon, AccountViewHeader, AccountViewFooter, AVDataCollection,  AccountView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            //// Define some URL routes             
            'accountlist': 'showaccntlist',
            // Default
            '*actions': 'defaultAction'
        }
    });
    var advisorinfo = '';
    var initialize = function () {
        var currentview;
        var accountView;
        var app_router = new AppRouter;             
       

        var setcurrentview = function (view) {
            if ((this.currentview != undefined || this.currentview)) {
                this.currentview.close();
            }
            this.currentview = view;
        };
        app_router.on('route:defaultAction', function (actions) { 
         /*   var avDataCollection = new AVDataCollection();        
            var accountview = new AccountView({collection: avDataCollection});
            accountview.render();*/

        });


        // Unlike the above, we don't call render on this view as it will handle
        // the render call internally after it loads data. Further more we load it
        // outside of an on-route function to have it loaded no matter which page is
        // loaded initially.
        // var footerView = new FooterView();

               
        location.hash = '';
        //var query = window.location.search.substring(1).split('=');
        //var loggedusrdata = document.cookie.split(',');
        //var loggedInsmu_Id = loggedusrdata[0].split('=');
        //setAdvsiorInfo(loggedusrdata[1].split('=')[1], loggedusrdata[0].split('=')[1]);
        var accountviewheader = new AccountViewHeader();
        accountviewheader.render();

            var avDataCollection = new AVDataCollection(); 
            avDataCollection.fetch();     
            var accountview = new AccountView({collection: avDataCollection});

            //accountview.render();
            //var accountview = new AccountView();
            //accountview.render();

        var accountviewfooter = new AccountViewFooter();
        accountviewfooter.render();
      

        Backbone.history.start();
    };
    //var getAdvsiorInfo = function (key) {
    //    return advisorinfo[key];
    //};
    //setAdvsiorInfo = function (fmid, smuid) {
    //    advisorinfo = {
    //        FMID: fmid,
    //        SMUDI: smuid
    //    };
    //};
    return { initialize: initialize };
});