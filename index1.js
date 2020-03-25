
var buttonColours = ["red", "blue", "green", "yellow"];
var started=false;
var level =0;
var gamePattern = [];
var userClickedPattern = [];
$("body").keypress(function(){
  if(!started){
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
$(this).addClass("pressed");
setTimeout(function () {
  $("#" + userChosenColour).removeClass("pressed");
}, 100);
playSound(userChosenColour);

checkanswer(userClickedPattern.length-1);
  //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.

});




//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {

  //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("s/" + name + ".mp3");
  audio.play();
}

function checkanswer(currentlevel){
  if(userClickedPattern[currentlevel]===gamePattern[currentlevel]){
    if(userClickedPattern.length===gamePattern.length){
    setTimeout(function(){nextSequence();},1000);
}
}
else{
  var audio=new Audio("s/wrong.mp3");
  audio.play();
$("body").addClass("game-over");
setTimeout(function(){
  $("body").removeClass("game-over");
},2000)
$("h1").text("Game Over press any key to restart");

  started=false;
  level=0;

  gamePattern=[];
}

}
function nextSequence() {
  userClickedPattern=[];
++level;

$("h1").text("level"+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);
}
