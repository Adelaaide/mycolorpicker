var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+", " 
	+color2.value
	+ ", " 
	+ color3.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function oldColor(){
	body.style.background = 
	"linear-gradient(to right," 
	+color1.value 
	+", " 
	+color2.value
	+", " 
	+color3.value 
	+ ")";
}

function newRandom() {
    color1.value = randomColor();
    color2.value = randomColor();
    color3.value = randomColor();
    setGradient();
}

btn.addEventListener('click', newRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);
