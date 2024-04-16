//displaying the data type of "Dog"
document.write(typeof "Dog");
document.write("<br>")

//combining a string and a number
document.write(34 + "34");
document.write("<br>")

//using ==
document.write(3==2);
document.write("<br>")

//using ===
x = 9;
y = "9";
document.write(x === y);
document.write("<br>")

//using >, < and &&
document.write(2 > 1 && 1< 9);
document.write("<br>")

//using ||
document.write(81 < 5 || 52 > 4);
document.write("<br>")

//using !
function not() {
    document.getElementById("Not").innerHTML = !(5 > 212);
}