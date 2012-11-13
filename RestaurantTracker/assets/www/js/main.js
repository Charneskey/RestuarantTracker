
Parse.initialize("Gs9WRdTYTb4cTZdUA1PzBKj3aKy4Yw4CSFDAAqoy", "jnk4wFOf2UdekynXp1P0msNWDrtEkWo3IZ7vfF9x");
var RObject = Parse.Object.extend("RObject");
var currentLocation;

function renderResults(results,myLoc) {
	console.log("renderResults: "+results.length);

	if(results.length) {
		$("#map_canvas").html("Displaying restaurants within 30 miles.");
		alert("alert");
		var map = L.map('map').setView([myLoc.latitude, myLoc.longitude], 8);
		var layerOpenStreet = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:18, minZoom:1, attribution:'Map data &copy; 2012 OpenStreetMap'}).addTo(map);
	
		for(var i=0, len=results.length; i<len; i++) {
			var result = results[i];
			var marker = L.marker([result.attributes.location.latitude, result.attributes.location.longitude]).addTo(map);
			var markerLabel = "Name: "+ result.attributes.name;
			marker.bindPopup(markerLabel);
		}
	} else {
		$("#map_canvas").html("I'm sorry, but I couldn't find any restaurants within 30 miles.");
	}
}

function onDeviceReady(){
	
	//get currentLocation
	navigator.geolocation.getCurrentPosition(function(pos) {
		currentLocation={longitude:pos.coords.longitude, latitude:pos.coords.latitude};
	});
	
		
	$("#trackingForm").on("submit",function(e){
		var r = new RObject();

		var point = new Parse.GeoPoint({latitude: currentLocation.latitude, longitude: currentLocation.longitude});
			e.preventDefault();
			var name = $("#rName").val();
			var meal = $("#rMeal").val();
			var city = $("#rCity").val();
					
			r.save({
				name:name,
				meal:meal,
				city:city,
				location:point});	
		});
		
		
		$("#get").on("click",function(){
			$("#map_canvas").html("Looking for restaurants within 30 miles.");
			navigator.geolocation.getCurrentPosition(function(pos) {
				var myLocation = new Parse.GeoPoint({latitude: pos.coords.latitude, longitude: pos.coords.longitude});

				//Begin our query
				var query = new Parse.Query(RObject);
				query.withinMiles("location", myLocation, 30);
				query.find({
					success:function(results) { renderResults(results,myLocation); },
					error: function(error) { alert("Error: " + error.code + " " + error.message); }
				});

			}, function(err) {
				//Since geolocation failed, we can't allow the user to submit
				doAlert("Sorry, but we couldn't find your location.");
			},{timeout:20000,enableHighAccuracy:false});
		});
}

function init(){
	document.addEventListener("deviceready", onDeviceReady, true);
}

