function addition_function() {
    var addition = 2 + 5;
    document.getElementById("Add").innerHTML = "2 + 5 = " + addition;
}

function subtraction_function() {
    var subtraction = 67 + 30;
    document.getElementById("Subtract").innerHTML = "67 - 30 = " + subtraction;
}

function multiply_function() {
    var multiply = 12*9;
    document.getElementById("Multiplication").innerHTML = "12 * 9 = " + multiply;
}

function divide_function() {
    var divide = 20 / 5;
    document.getElementById("Division").innerHTML = "20 / 5 = " + divide;
}

function modulus_operator() {
    var modulus = 7 % 3;
    document.getElementById("Mod").innerHTML = 
    "When you divide 7 by 3 you have a remainder of " + modulus;
}

function increment_function() {
    var value = document.getElementById("IncrementText").innerHTML;
    
    value++;

    document.getElementById("IncrementText").innerHTML = value;
}

function decrement_function() {
    var value = document.getElementById("DecrementText").innerHTML;
    
    value--;

    document.getElementById("DecrementText").innerHTML = value;
}


function random_function() {
    document.getElementById("Rand").innerHTML = Math.random()*50;
}