var name = "Wendy";
console.log("Oh hi " + name);


var name2 = "Marisol";
console.log("Oh hi " + name2);

//Functions

/* Functions
What if we wanted to do the same set of steps multiple times? It would be very tiring to type out the same
thin over and over again, and it would make our code very messy. Functions allow us to associete
a command with an action

we need the followunf to create a cfunction
- Function keyword
- A name of the function
- Opcional Any necessary parameters, comma separed in parentesis
- Code block to be executed whe the functions is called

When you call a function, the information you pass to the function( the part in parentesis
    )is called an argument.


*/
function sayHello(name) {
    console.log("Oh Hi " + name);

}
sayHello("Mark");
sayHello("Lisa");
sayHello("Denny");


///Example square

function calculateArea(side) {
    console.log(side * side);
}
calculateArea(5);

///Example Rectangule

function calculateArea(side1, side2) {
    console.log(side1 * side2);

}

calculateArea(10, 40);


///Example Ramdom

function randomNumber() {
    console.log(Math.random());
}

randomNumber();