
Parse.initialize("Gs9WRdTYTb4cTZdUA1PzBKj3aKy4Yw4CSFDAAqoy", "jnk4wFOf2UdekynXp1P0msNWDrtEkWo3IZ7vfF9x");
var RObject = Parse.Object.extend("RObject");

function onDeviceReady(){
	alert("device ready");
	var r = new RObject();
	
	$("#trackingForm").on("submit",function(e){
			
			e.preventDefault();
			var name = $("#rName").val();
			var meal = $("#rMeal").val();
			var city = $("#rCity").val();
					
			r.save({name:name});
			r.save({meal:meal});
			r.save({city:city});
			
		});
		
}

function init(){
	document.addEventListener("deviceready", onDeviceReady, true);
}

