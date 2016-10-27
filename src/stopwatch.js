var timer = 0;
var intervalId;
var updatedMs;
// var newTimer;
var active = false;

function start () {
  active = true;
  var startingMs = Date.now();
  intervalId = setInterval(function(){
    // timer += 1;
    // newTimer = timer;
    updatedMs = Date.now() - startingMs;
  }, 1000);
}
