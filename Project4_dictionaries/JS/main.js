function my_Dictionary() {
    var bowlingBall = {
        brand:"Storm",
        model:"Journey",
        weight:"15lb",
        color:"Blue and black"
    }
    delete bowlingBall.weight
    document.getElementById("Dictionary").innerHTML = bowlingBall.weight;
}