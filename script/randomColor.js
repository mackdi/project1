function init(){
	//vibrate
	navigator.vibrate = navigator.vibrate ||
						navigator.webkitVibrate ||
						navigator.mozVibrate || 
						navigator.msVibrate;

	navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
	

	//CHANGE H1 COLOR INIT CODE
	var h1tags = document.getElementsByTagName("h1");
	h1tags[0].onclick = changeColor;


	//GEOLOCATION CODE
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




function changeColor() {
	this.innerHTML = "Click Again";
	var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
	
	this.style.color = randomColor; 


}
onload = init;



		
