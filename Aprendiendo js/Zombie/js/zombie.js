/* if else*/

alert("It is the zombie apocalypse. You are looting a store and suddenly a zombie burst throught");
var weapon = prompt("You search around frantically for a weapon. What do you chose? a bow and arrow, an axe, or a rubber chicken?");
var randomNumber = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon);
if (randomNumber === 0) {
    alert("The zombie bites you, you loose");
} else if (randomNumber === 1) {
    alert("You kill the zombie" + " " + weapon + " You win!");
}



/** Switch */

var sign = prompt("What is astrological sign?").toLowerCase;
alert("Sensing.. sensing your future");
switch (sign) {
    case "taurus":
        alert("Your sign is:" + sign + " " + "And you ........................");
        break;
    case "virgo":
        alert("Your sign is:" + sign + " " + "And you ........................");
        break;
    case "geminis":
        alert("Your sign is:" + sign + " " + "And you ........................");
        break;
    default:
        alert("Please enter a value sign");
        break;
}

/* Loop*/
/*Another form of control. They "Loop" through a blcok od code until an original specified 
condition is not longer true
For Loops are an incredibly useful king of loop. Always make sure your loop eventually
evaluates to false or you will create what is called an infinitive loop and crash the browser
- If the number is divisible by 3, print fizz
- if the number is divisible by 5, print buzz
- if the number is divisible by 3 AND 5, print fizzbuzz

*/

//sitaxis
for (i = 0; i < 11; i++) {
    console.log(i);
}

for (var i = 0; i < 11; i++) { /*Print de 0 to 10*/
    console.log(i);

}

//Revisiting FizzBuzz


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz");
    } else {
        console.log(i);

    }
}
//Other way
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0)
            console.log("FizzBuzz");
    } else {
        console.log("Fizz");
    }
} else if (i % 5 === 0) {
    console.log("buzz");
} else {
    console.log(i);
}

//While Loops
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 11);

var i = 0;
while (i < 11) {
    console.log(i);
    i++;
}



























)