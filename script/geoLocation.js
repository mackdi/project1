//GEOLACATION CODE
window.onload = function (){
	navigator.vibrate = navigator.vibrate ||
						navigator.webkitVibrate ||
						navigator.mozVibrate || 
						navigator.msVibrate;

	navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
	
	
	
		navigator.vibrate(10000);
		if(navigator.geolocation){
			document.getElementById("notify").innerHTML = "We are trying to find you";
			navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
		}
			else{
				document.getElementById("notify").innerHTML = "your browser doesn't support geolocation";

			}

			function successFunc (pos) {
				
				var lat = pos.coords.latitude;
				
				var longt = pos.coords.longitude;
				document.getElementById('notify').innerHTML = 'You are at latitude:' + lat + '&nbsp and &nbsp' + 'longitude:' + longt;
			}
			function errorFunc (err) {
				
				document.getElementById('notify').innerHTML = 'error: ' + err.code + "<br>" +' message: ' + err.message;
				
			}
}
