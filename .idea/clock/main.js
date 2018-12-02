
var currentSeconds = 60;
var timer = null;
function processSecond(){
  currentSeconds--;
  var degrees = 270  - currentSeconds * 6;
  $(".hand").css('transform', `rotateZ(${degrees}deg)`)
}


function startTimer(){
  clearInterval(timer);
  currentSeconds = 60;
  timer = setInterval(processSecond,1000);
}

$("button").click(startTimer);