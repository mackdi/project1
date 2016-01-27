var vOfName;
function setName() {
		
		var name = document.getElementById('yourName').value;
		if(name === ""){
			return false;
		} 
		localStorage.setItem('myName', name);
		document.getElementById('yourName').value = "Name Saved";
		vOfName = localStorage.getItem('myName');
		

	}
	function getName () {
		// body...
		if (localStorage.getItem("myName") === null) {
			return false;
		};
		document.getElementById("yourName").value = "Name stored: " + localStorage.getItem("myName")

	}

	function removeName(){
		if(localStorage.getItem("myName") === null) return false;
		localStorage.removeItem('myName');
		
		document.getElementById('yourName').value = "Name removed: " + vOfName;


	}
	function reset () {
		// body...
		document.getElementById('yourName').value = "";



	}