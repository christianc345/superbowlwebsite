//this function is when the image source is clicked this images finds the id c1 and the image goes into that div that is called c1
function oiler(){
	document.getElementById("c1").src = "images/oiler.jpg";
}
//this function is when the image source is clicked this images finds the id c2 and the image goes into that div that is called c2
function charger(){
	document.getElementById("c2").src = "images/chargers.jpg";
}

//this function is when the image source is clicked this images finds the id c2 and the image goes into that div that is called c2
function raiders(){
	document.getElementById("c2").src = "images/raider.jpg";
}

//this function is when the image source is clicked this images finds the id c2 and the image goes into that div that is called c1
function miamid(){
	document.getElementById("c2").src = "images/miami.png";
}

//this function is when the image source is clicked this images finds the id c1 and the image goes into that div that is called c1
function steeler(){
	document.getElementById("c1").src = "images/steelers.jpg";
}
//this function is when the image source is clicked this images finds the id c1 and the image goes into that div that is called c1
function viking(){
	document.getElementById("c1").src = "images/purple.png";
}
//this function checks toc see if the images in the divs c1 and c2 are vikings and raider image and if you solved it you get the key if the images you pick are not the raiders or the vikings then you get a message saying try again when clicked
function check(){
	if(document.getElementById("c1").src.match("images/purple.png") && document.getElementById("c2").src.match("images/raider.jpg")){
		document.getElementById("check").src = "images/bosskey.gif";
	} else{
		window.alert("TRY AGAIN");
	}
}
//this function is a timer that will be set an a minute and will be counting down
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
           window.history.back();
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
