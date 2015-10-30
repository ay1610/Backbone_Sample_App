/*var avData = [
{
	av_product_name: "SPS ADVANTAGE W/ ONE",
	av_value: "$100,1000,000.01",
	av_plan: "Non-Qualified",
	av_owners: "WALTER F NIEDERHEIMER JR ALEXANDRA P NIEDERHEIMER-CHRISTODOULOPOULOS"	
}
]*/

var AVDataModel = Backbone.Model.extend({
    defaults: {
        "av_product_name": "Default Name",
        "av_value": "Default Val",
        "av_plan": "Default_Plan",
        "av_owners": "Default_Owner"
    }
});

var AVDataCollection = Backbone.Collection.extend({
	url : "json/data.json",
	model: AVDataModel

});
