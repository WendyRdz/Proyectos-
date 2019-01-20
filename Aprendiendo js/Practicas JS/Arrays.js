//Arrays

/* */

var friends = ["Mark", "Lisa", "Denny"];
console.log(friends[1]); //mostrar por posicion
friends[3] = "Bob"; //agregar un elemento por posicion
friends.push("Mary"); //agregar al final del array



/*looping over an array */

var friends = ["Mark", "Lisa", "Denny", "Peter", "Steven", "Claudette"];

function greetFriends() {
    for (var i = 0; i < friends.length; i++) {
        console.log("Ogh hi," + friends[i]);
    }
}
greetFriends();