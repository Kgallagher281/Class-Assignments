addNums1(3,4);
function addNums1 (num1, num2) {
console.log(num1 + num2);
return num1 + num2;

}


var addNums2 = function( num1, num2) {
return num1 + num2;


};





function echo ( phrase ) {
hr();
console.log ( phrase);
hr();
}

echo("hello");


function hr() {
	console.log("------------------");
	console.log("_".repeat(20)); //same as above//

}


function doorPrize ( doorNumber ) {
	if ( doorNumber ==1) {

		return="a boat";
	} else if( doorNumber ==2 ) {
		return="A car";

	} else if (doorNumber ==3) {
		return="An old shoe";

	}
}
console.log ("You Won:", doorPrize( prompt("Pick a door") ) );

}




//same as above function//
function doorPrize ( doorNumber ) {
	var prizez = ["A boat", "A car", "An old shoe"];
	var index = parseInt(doorNumber-1);
	return prizes [index] || "You didn't pick a valid door, ass";
	}


console.log ("You Won:", doorPrize( prompt("Pick a door") ) );


for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]



}


var friends = ["Jake","John","Samantha","Billy"];

for(var 1=0; 1<friends.length; i++){
console.log( friends[i] + "is my frend" );

}

friends.forEach( function(value,index) {

	console.log(value + "is my friend");
});

sings = 99

while(sings < 99) {
console.log("Bottles of beer on the wall" + sings)

X++;

}
