function ram(){
	document.getElementById("c1").src = "images/helmet.png";
}

function charger(){
	document.getElementById("c2").src = "images/chargers.jpg";
}


function raiders(){
	document.getElementById("c2").src = "images/raider.jpg";
}


function miamid(){
	document.getElementById("c2").src = "images/miami.png";
}


function steeler(){
	document.getElementById("c1").src = "images/steelers.jpg";
}

function viking(){
	document.getElementById("c1").src = "images/purple.png";
}

function check(){
	if(document.getElementById("c1").src.match("images/purple.png") && document.getElementById("c2").src.match("images/raider.jpg")){
		window.alert("SOLVED THE PUZZLE!!!");
	} else{
		window.alert("TRY AGAIN");
	}
}


