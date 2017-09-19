var yell = "Hey, I told you not to hover over me!";

document.querySelector("#right").addEventListener("mouseover",function(){
  document.getElementById("right").innerText=yell; console.log(yell); })				