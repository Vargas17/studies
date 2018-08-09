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

var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
	}
});

var Boat = Vehicle.extend({
	start: function(){
		console.log("Boat with registration number " + this.get("registrationNumber") + " started.");
	}
});

var Vehicles = Backbone.Collection.extend({
	Model: Vehicle
});

var cars = new Vehicles([
	new Car({ registrationNumber: "XLI887", color: "Blue" }),
	new Car({ registrationNumber: "ZNP123", color: "Blue" }),
	new Car({ registrationNumber: "XUV456", color: "Gray" })
]);

var boats = new Vehicles([
	new Boat({ registrationNumber: "CLI887", color: "White" }),
	new Boat({ registrationNumber: "ENP123", color: "Black" }),
	new Boat({ registrationNumber: "LUV456", color: "Silver" })
])

var HomeView = Backbone.View.extend({
	render: function() {
		this.$el.html("HOME VIEW");

		return this;
	}
});

var VehicleView = Backbone.View.extend({
	tagName: "li",
	render: function() {
		this.$el.html(this.model.get("registrationNumber"));

		return this;
	}
});

var VehiclesView = Backbone.View.extend({
	tagName: "ul",
	render: function() {
		this.collection.each(function(vehicle){
			var vehicleView = new VehicleView({ model: vehicle });
			this.$el.append(vehicleView.render().$el);
		}, this);

		return this;
	}
});

var AppRouter = Backbone.Router.extend({
	routes: {
		"home": "viewHome",
		"cars": "viewCars",
		"boats": "viewBoats"
	},
	viewHome: function(){
		var view = new HomeView({ el: "#container" });
		view.render();
	},
	viewCars: function(){
		var view = new VehiclesView({ el: "#container", collection: cars });
		view.render();
	},
	viewBoats: function(){
		var view = new VehiclesView({ el: "#container", collection: boats });
		view.render();
	}
});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
	events: {
		"click": "onClick"
	},
	onClick: function(e){
		console.log("clicked, ", e);
		var $li = $(e.target);
		router.navigate($li.attr("data-url"), { trigger: true });
	}
});

var navView = new NavView({ el: "#nav" });