let elForm, elOutput4, elUsername, elPassword;

document.addEventListener("DOMContentLoaded", function(){
	console.log("Loaded!")
	elForm=document.getElementById("login");

	elOutput4=document.querySelector("#output4");

	elUsername=document.getElementById("username");
	
	elPassword=document.querySelector("input[name=password]");
	
	console.log(elPassword);
	
	elForm.addEventListener("submit", function( event ){
		event.preventDefault();

if( elPassword.value == "12345678" && elUsername.value.length < 14){

	elOutput4.innerText = "Congrats on knowing your username and password!";

} else {
	elOutput4.innerText = "Incorrect username or password";
	
	}

});

});