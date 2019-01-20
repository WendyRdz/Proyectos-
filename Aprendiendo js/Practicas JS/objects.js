//Meet therapy, the JavaScript care Robot!
/* A confirm pop up returns a boolean value (True or false)
- if "ok" is clicked, it returns true
-if "cancel" is clicked, it returns false
*/

var sad = confirm("Would you like to be cheered up?");
//This is the same as saying while (sad == true);
while (sad) {
    alert("What do you call a boomerang that doesnt come back?....A stick!");
    var yes = confirm("Wouldo you like to continue our sesion?");

    if (yes) {
        var response = prompt("Tell me about your troubles:", "Type your feeling here");

        if (response) {
            alert("I am sorry you are feeling down about that. I know you cant see it");
            sad = false;
        } else {
            sad = false;
        }
    }
}