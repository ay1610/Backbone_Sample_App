// Filename: models/project
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var AVDataModel = Backbone.Model.extend({
    defaults: {
        "av_product_name": "Default Name",
        "av_value": "Default Val",
        "av_plan": "Default_Plan",
        "av_owners": "Default_Owner"
    }
  });
  // Return the model for the module
  return AVDataModel;
});