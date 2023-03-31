var css = document.querySelector("h3");
var body = document.getElementById("body");

function getRandom(){
	return Math.floor(Math.random() * 255);
}
function getColor1(){
	var color1 = {
		r : getRandom(),
		g : getRandom(),
		b : getRandom()
	}
	return color1;
}
function getColor2(){
	var color2 = {
		r : getRandom(),
		g : getRandom(),
		b : getRandom()
	}
	return color2;
}

body.addEventListener("keypress",function(){
	console.log(event)
	if(event.keyCode === 32){
		var c1 = getColor1();
		var c2 = getColor2();	
		body.style.background =`linear-gradient(to right,rgb(${c1.r},${c1.g},${c1.b}),rgb(${c2.r},${c2.g},${c2.b}))`;
		css.textContent = body.style.background;	
	}
	
})