//function that adds 2 numbers
function addition_function() {
    var addition = 2 + 5;
    document.getElementById("Add").innerHTML = "2 + 5 = " + addition;
}

//function that subtracts 2 numbers
function subtraction_function() {
    var subtraction = 67 + 30;
    document.getElementById("Subtract").innerHTML = "67 - 30 = " + subtraction;
}

//function that multiplys 2 numbers
function multiply_function() {
    var multiply = 12*9;
    document.getElementById("Multiplication").innerHTML = "12 * 9 = " + multiply;
}

//function that divides 2 numbers
function divide_function() {
    var divide = 20 / 5;
    document.getElementById("Division").innerHTML = "20 / 5 = " + divide;
}

//function that shows the remainder of 2 divided numbers
function modulus_operator() {
    var modulus = 7 % 3;
    document.getElementById("Mod").innerHTML = 
    "When you divide 7 by 3 you have a remainder of " + modulus;
}

//function that goes up in value
function increment_function() {
    var value = document.getElementById("IncrementText").innerHTML;
    
    value++;

    document.getElementById("IncrementText").innerHTML = value;
}

//function that goes down in value
function decrement_function() {
    var value = document.getElementById("DecrementText").innerHTML;
    
    value--;

    document.getElementById("DecrementText").innerHTML = value;
}

//random number generator up to 50
function random_function() {
    document.getElementById("Rand").innerHTML = Math.random()*50;
}