//  alert("game.js is successfully installed!");




var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var randomNumber = Math.floor(Math.random() * 4);

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");

    $("#" + userChosenColour).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });


    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);

    console.log(userClickedPattern);
    // alert("the first btn function has been clicked!")
});


// var gamePattern = [randomChosenColour];
// var gameButton = document.getElementsByClassName(["btn"]);
// var gameButton = randomChosenColour;

function nextSequence() {

    // alert(userChosenColour + ' is your colour!'); 
    playSound(userChosenColour);
    
    gamePattern.push(userChosenColour);

    // console.log(gamePattern);



    // if (gamePattern) {
    //     alert("the button colours are the same!")
    //     alert("the game button is... " + gameButton);
    //     alert("this is the gamePattern " + gamePattern);
    // } else {
    //     alert("bum bummm");
    //     alert("the game button is... " + gameButton);
    //     alert("this is the gamePattern " + gamePattern);
    // }
}



// $("div").click(function() {
//     nextSequence();
// });


nextSequence();
