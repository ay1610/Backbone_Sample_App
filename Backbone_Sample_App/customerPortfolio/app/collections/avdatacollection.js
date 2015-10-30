// Filename: collections/projects
define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  '../models/avdatamodel'
], function(_, Backbone, AVDataModel){
  var AVDataCollection = Backbone.Collection.extend({
  	url : "json/data.json",
    model: AVDataModel,
    sortAttribute: "av_product_name", //default sort by name asc
    sortAsc: true,
    comparator: function(a,b){
        var a = a.get(this.sortAttribute),
            b = b.get(this.sortAttribute);
        if (a == b) return 0;
        if (this.sortAsc) return a > b ? 1 : -1;
        return a < b ? 1 : -1;
    }
  });
  // You don't usually return a collection instantiated
  return AVDataCollection;
});