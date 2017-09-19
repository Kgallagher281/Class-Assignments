var right = "I'm right";
var noright = "No, I'm right";

document.querySelector("#right").addEventListener("click",function(){
  document.getElementById("test").innerText=right; console.log(right); })


  document.querySelector("#noright").addEventListener("click", function(){
  	document.getElementById("test").innerText=noright;	console.log(noright);})


