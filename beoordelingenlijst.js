function id(e) { return document.getElementById(e); }

id("btn1").onclick = function() {
	var num = parseInt(id("num1").value);
	var gradeWord = gradeToWord(num);
	log("Het cijfer is " + num + " en is dus " + gradeWord);
}

function gradeToWord(grade) {
	if(grade <= 49) {
		return "onvoldoende";
	} else if(grade <= 59) {
		return "matig";
	} else if(grade <= 74) {
		return "voldoende";
	} else {
		return "goed";
	}
}

function log(text) {
	id("resultaat").innerHTML += text + "<br />";
}