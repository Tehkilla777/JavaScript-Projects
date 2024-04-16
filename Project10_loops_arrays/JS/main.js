//using while loop
function count_to_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//using for loop
var Bowling_Ball_Brands = [
    "Storm",
    "Hammer",
    "Rotogrip",
    "Brunswick",
    "Global 900",
];
var content = "";
var y;
function for_Loop() {
    for (y = 0; y < Bowling_Ball_Brands.length; y++) {
        content += Bowling_Ball_Brands[y] + "<br>";
    }
    document.getElementById("List_of_Bowling_Ball_Brands").innerHTML = content;
}

//using an array
function color_array() {
    var Colors = [];
    Colors[1] = "Green";
    Colors[2] = "Red";
    Colors[3] = "Blue";
    Colors[4] = "Yellow";
    Colors[5] = "Orange";
    Colors[6] = "Purple";
    document.getElementById("Array").innerHTML = 
        "My favorite color is " + Colors[3] + ".";
}

//an object with a let keyword
function car() {
    let car = {
        make: "Nissan",
        year: "2023",
        color: "Black",
    };

    document.getElementById("car").innerHTML = 
    "I have a " + car.year + " " + car.color + " " + car.make + ".";
}