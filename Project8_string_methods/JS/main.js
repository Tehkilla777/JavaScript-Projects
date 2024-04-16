//using contat()
function full_sentence() {
    var part_1 = "This sentence ";
    var part_2 = "is made up ";
    var part_3 = "of 3 variables!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//using slice()
function slice_Method() {
    var sentence = "Time to get slicing!";
    var section = sentence.slice(0, 4);
    document.getElementById("Slice").innerHTML = section;
}

//using toString()
function string_Method() {
    var x = 2024;
    document.getElementById("ToString").innerHTML = x.toString();
}

//using toPrecision()
function precision_Method() {
    var y = 3.14159265359;
    document.getElementById("SpecificLength").innerHTML = y.toPrecision(7);
}