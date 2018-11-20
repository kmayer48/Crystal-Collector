//global variables
var randomNum;
var winCount = 0;
var lossCount = 0;
var amountCount = 0;

//Set amount needed and wins/losses
var startGame = function() {
randomNum = Math.floor(Math.random() * (120-19) + 19);
$(".amount").html(randomNum);
$(".wins").html(winCount);
$(".losses").html(lossCount)
$(".rupee_row").empty();

//images
var images = [
    "assets/images/rupee1.png",
    "assets/images/rupee2.png",
    "assets/images/rupee3.png",
    "assets/images/rupee4.png",
]

//create Rupee divs and assigning a random value to them
    for(var i = 0; i < 4; i++){
        var randomValue = Math.floor(Math.random() * 12) +1;
        var rupee = $("<div>");
        rupee.attr({
            "class": "rupees",
            "value": randomValue, 
        });
        rupee.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "150px 200px",
            "background-repeat": "none",
        })
        $(".rupee_row").append(rupee);
    }
}

startGame();

//On click function that gathers the value and adds to the amountCount variable
$(document).on("click", ".rupees", function() {
    $.playSound("assets/audio/rupee.wav")
    var num = parseInt($(this).attr("value"));
    amountCount+= num;
    console.log(amountCount)
    $(".currentAmount").html(amountCount)

//comparion and win & loss counter
    if (amountCount > randomNum){
        console.log("You Lost")
        lossCount++;
        amountCount = 0;
        $(".currentAmount").html(amountCount)
        $(".losses").html(lossCount);
        $.playSound("assets/audio/lose.wav")
        startGame();
    }
    else if(amountCount === randomNum){
        console.log("You Win")
        winCount++;
        amountCount = 0;
        $(".currentAmount").html(amountCount)
        $.playSound("assets/audio/win.wav")
        startGame();
    }
});





