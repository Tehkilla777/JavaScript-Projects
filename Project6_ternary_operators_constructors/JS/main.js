//Using a ternary operation with browser input
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//a constructor function using new and this keywords
function bowlingBall(Brand, Model, Weight, Color) {
    this.bowlingBall_Brand = Brand;
    this.bowlingBall_Model = Model;
    this.bowlingBall_Weight = Weight;
    this.bowlingBall_Color = Color;
}
var Mason = new bowlingBall("Storm", "Journey", "15lb", "Blue and Black");
var Justin = new bowlingBall("Hammer", "Ocean Vibe", "16lb", "Light blue");
var Amy = new bowlingBall("Brunswick", "Tzone", "12lb", "Purple");

//a function used to display the result of the contructor function
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Mason throws a " +
        Mason.bowlingBall_Weight +
        " " +
        Mason.bowlingBall_Brand +
        " " +
        Mason.bowlingBall_Model;
}

//nested function
function add_Strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}