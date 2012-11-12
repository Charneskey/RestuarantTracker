
Parse.initialize("Gs9WRdTYTb4cTZdUA1PzBKj3aKy4Yw4CSFDAAqoy", "jnk4wFOf2UdekynXp1P0msNWDrtEkWo3IZ7vfF9x");
var RObject = Parse.Object.extend("RObject");
var currentLocation;

function onDeviceReady(){
	//alert("device ready");
	
	navigator.geolocation.getCurrentPosition(function(pos) {
		currentLocation={longitude:pos.coords.longitude, latitude:pos.coords.latitude};
	});
	
	//navigator.geolocation.getCurrentPosition(function(pos) {
		//store the long/lat
		//currentLocation = {longitude:pos.coords.longitude, latitude:pos.coords.latitude};
	//});
	
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
			//point.save({location:point});
			
		});
		
		
		
}

function init(){
	document.addEventListener("deviceready", onDeviceReady, true);
}

