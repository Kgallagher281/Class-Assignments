var headtag= prompt("Press a Key")

document.addEventListener("keypress", function(event){
	document.getElementById("headtag").innerText+=event.key; console.log(headtag)
 
});