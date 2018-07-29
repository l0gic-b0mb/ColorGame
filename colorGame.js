var square = document.querySelectorAll(".square");
var numberOfColors=6;
var color = generateRandomColor(numberOfColors);
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var eastBtn = document.querySelector("#eastBtn");
var hardBtn = document.querySelector("#hardBtn")

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click",reset);

eastBtn.addEventListener("click",function(){
	numberOfColors=3;
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	reset();
})

hardBtn.addEventListener("click",function(){
	numberOfColors=6;
	this.classList.add("selected");
	eastBtn.classList.remove("selected");
	reset();
})

for(var i=0;i<square.length;i++)
{
	square[i].style.background=color[i];
	square[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct! :D";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.background = "#232323";
			messageDisplay.textContent="Try Again :(";
		}
	});
}

function changeColor(toThisColor)
{
	for (var i = 0; i < numberOfColors; i++) {
		square[i].style.background=toThisColor;
	}
}

function pickColor()
{
	return color[Math.floor(Math.random() * color.length)];
}

function generateRandomColor(num)
{
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var color = "rgb(" + r + ", " + b +", " + g + ")";
	return color;
}

function reset()
{
	color = generateRandomColor(numberOfColors);
	pickedColor = pickColor();
	for (var i = 0; i < square.length; i++) {
		if(i<numberOfColors)
		{
			square[i].style.display="block";
			square[i].style.background=color[i];
		}
		else
		{
			square[i].style.background="none";
		}
	}
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	resetButton.textContent = "New Color"
	messageDisplay.textContent = "";
}