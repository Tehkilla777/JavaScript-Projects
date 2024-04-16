//creates a dictionary for a bowling ball
function my_Dictionary() {
    var bowlingBall = {
        brand:"Storm",
        model:"Journey",
        weight:"15lb",
        color:"Blue and black"
    }
    delete bowlingBall.weight //deletes the weight KPV
    document.getElementById("Dictionary").innerHTML = bowlingBall.weight;
}