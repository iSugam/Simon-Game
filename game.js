var buttonColours= ["red", "blue", "green", "yellow"];
var gamePattern =[];
var userClickedPattern=[];
var level=0;
var start = false;


$(document).keypress(function(){

 if(!start){
  $("#level-title").text("Level " + level);
  nextSequence();
  start = true;
 }
});

// function restart (){

//     start = true;
  
// }

$(".btn").click( function(){
    //Get id from buttos and put in inside (userClickedPattern) Array
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length-1);


  // generate sounds on button click
   playSound(userChosenColour);

   //add css class (.pressed) to clicked button
   animatePress(userChosenColour);
 
  });

function nextSequence(){
  userClickedPattern=[];

  level++;
  $("#level-title").text("Level " + level);
  // generates random number
  var randomNumber = Math.floor(Math.random()*4)
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // animate fadeIn and FadeOut
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

  // generate sounds
  playSound(randomChosenColour);
}

  // Get audio files fron sounds folder
  function playSound(name){
    var audio=  new Audio("sounds/"+name+".mp3").play();
  }

// to get css class called (.pressed)
  function animatePress(currentClor){

    $("#"+currentClor).addClass("pressed");

    //TimeOut animation
    setTimeout(function(){
        $("."+currentClor).removeClass("pressed");
    }, 100);
  }
  
  
  function checkAnswer(currentLevel){
   
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
      
    }
      
    }else {
      playSound("wrong");
      
      $("body").addClass("game-over");
        $("#level-title").text("Game Over, press any key to restart the game");
        setTimeout(function (){
          $("body").removeClass("game-over");
        }, 200);

      startOver();
      
    }

  }

 function startOver(){
  level=0;
  gamePattern=[];
  start = false;
 }