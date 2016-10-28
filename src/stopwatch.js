var seconds = 0;
var intervalId;
var updatedMs;
var active = false;
var startingMs;
var startButton = document.getElementById("start");

startButton.onclick = function() {start()};

function start () {
  active = true;
  startingMs = Date.now();
  intervalId = setInterval(function(){
    updatedMs = Date.now() - startingMs;
    var updatedSec = new Date(updatedMs)
    document.getElementsByClassName("display")[0].textContent, seconds = updatedSec.getUTCSeconds();
  }, 1000);
}

function stop () {
  active = false;
  clearInterval(intervalId);
}

function reset () {
  active = false;
  stop();
  seconds = 0;
}
