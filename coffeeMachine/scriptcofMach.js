var power = "On";
var userInputPower = "";
var selection = "";
var cup = "";
var chocoPowder = "chocolate powder";
var milk = "frothed milk";
var coffee = "hot coffee";

userInputPower = prompt("Would you like a cup of coffee?", "Yes").toLowerCase();

while (userInputPower !== "yes" && userInputPower !== "no") {
    alert("Please enter a valid answer!");
    userInputPower = prompt("Would you like a cup of coffee?", "Yes").toLowerCase();
}

if (userInputPower === "yes") {
    while (power === "On") {

        selection = prompt("Please select coffee : Mocha, Latte, Espresso", "Mocha, Latte, Espresso").toLowerCase();

        if (selection !== "mocha" && selection !== "latte" && selection !== "espresso") {
            alert("Please enter a valid coffee!");
            continue;

        }

        if (selection == "mocha") {

            cup = chocoPowder + ", " + milk + " and " + coffee;

        }
        else if (selection == "latte") {

            cup = milk + " and " + coffee;
        }
        else if (selection == "espresso") {

            cup = coffee;
        }

        alert("Your coffee is ready! Enjoy your " + selection + " made with " + cup + " !")
        userInputPower = prompt("Would you like another cup of coffee?", "Yes");

        if (userInputPower !== "yes") {
            alert("Ok then! See you later!");
            break;

        }

    }

} else {
    alert("Ok then! See you later!");
    power = "off"
}









