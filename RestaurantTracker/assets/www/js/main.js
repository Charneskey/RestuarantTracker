
Parse.initialize("Gs9WRdTYTb4cTZdUA1PzBKj3aKy4Yw4CSFDAAqoy", "jnk4wFOf2UdekynXp1P0msNWDrtEkWo3IZ7vfF9x");
RObject = Parse.Object.extend("RObject");

function onDeviceReady(){
	alert("device ready");
	
}

function init(){
	document.addEventListener("deviceready", onDeviceReady, true);
}

$("#trackingForm").on("submit",function(e){
	
	e.preventDefault();
	var name = $("#rName").val();
	var meal = $("#rMeal").val();
	var city = $("#rCity").val();
	
	var r = new RObject();
	
	r.save({name:name});
}
		

);