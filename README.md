
# Simon Game

Simon game is an electronic game of short-term memory skill. This is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order.


## How to Play

• Simon will give the first signal. (This is the only signal
Simon will give you until the end of the game. It will
not repeat the signals you play.)

• Repeat that signal, and add one more.

• Repeat the first two signals, and add one more.

• Continue to repeat and add to the sequence for as long
as you can.

## Triggering events with JS and jQuery

#### Check the keyboard event from the user and if not start(false) or game isn't started, then start the game.

```javascript
$(document).keypress(function(){
 if(!start){
    $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
 }
});
```

### Check if user input is correct or not.

```javascript
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
```

### Restart the game.
```javascript
function restart(){
    startOver(); 
    $("#level-title").text("Press Any Key on keyboard to Start");  
}
```
