//TODO: insert parse keys
Parse.initialize("", "");
//TipObject = Parse.Object.extend("TipObject");

function onDeviceReady(){
	alert("device ready");
	
}

function init(){
	document.addEventListener("deviceready", onDeviceReady, true);
}