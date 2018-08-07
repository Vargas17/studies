// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",

	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Vehicle is not valid.";
	},

	start: function(){
		console.log("Vehicle started.");
	}
});

var Vehicles = Backbone.Collection.extend({
	Model: Vehicle
});

var VehicleView = Backbone.View.extend({
	tagName: "li",
	attributes: {
		"data-color": "Blue"
	},
	events: {
		"click .delete": "onClick"
	},
	onClick: function() {
		this.remove();
	},
	render: function() {
		this.$el.html(this.model.get("registrationNumber") + "<button>Delete</button>");

		return this;
	}
});

var vehicles = new Vehicles([
	new Vehicle({ registrationNumber: "XLI887", color: "Blue" }),
	new Vehicle({ registrationNumber: "ZNP123", color: "Blue" }),
	new Vehicle({ registrationNumber: "XUV456", color: "Gray" })
]);

