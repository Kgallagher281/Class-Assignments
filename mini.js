//Question #1 

var num1=30
var num2=20


console.log(num1 + num2)


//Question #2
var cars =[ 
  
  ["BMW", "Audi", "Ferrari"],
  ["Red", "blue", "green"]

];

console.log(cars [0][1], cars[1][2]);


//Question #3

var value= prompt("Please enter a number");

if(value < 100){
	console.log("This is less than 100");
} else {
console.log("Your number is " + value + "  and it is greater than 100");

}


//Question #6

var intitials= prompt("enter name");
function inputname(name){

	console.log("Your name entered is " + name)

}

inputname(intitials);

//Question #7

function blank(){

console.log("This area has nothing to return");

}

blank();

//Question #8
]
var door = prompt("Please pick a door");

 function doorPrize( door ) {
 if( door == 1 ) {
    console.log("You won a TV")
    } else if( door == 2 ) {
    console.log("You won an Island");
    } else if( door == 3) {
    console.log("You won a Trip");
    }
 }
 
 doorPrize(door);

