var timer = 0;
var intervalId;
var updatedMs;
var active = false;
var startingMs;
var seconds;

function start () {
  active = true;
  startingMs = Date.now();
  intervalId = setInterval(function(){
    updatedMs = Date.now() - startingMs;
    var updatedSec = new Date(updatedMs)
    seconds = updatedSec.getUTCSeconds();
  }, 1000);
}
