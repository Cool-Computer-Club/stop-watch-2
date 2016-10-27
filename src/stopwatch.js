var seconds = 0;
var intervalId;
var updatedMs;
var active = false;
var startingMs;

function start () {
  active = true;
  startingMs = Date.now();
  intervalId = setInterval(function(){
    updatedMs = Date.now() - startingMs;
    var updatedSec = new Date(updatedMs)
    seconds = updatedSec.getUTCSeconds();
  }, 1000);
}

function stop () {
  active = false;
  clearInterval(intervalId);
}
