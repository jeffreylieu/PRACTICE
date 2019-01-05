$(document).ready(function() {
    $('.bug').each(function() {
      startAnimation(this);
    })
  });
  
  function startAnimation(element) {
    var position = $(element).position();
    var widthArea = $("body").width();
    var heightArea = $("body").height();
    var deltaDistance = widthArea;
    var minTime = 500,
      maxTime = 3000;
  
    var nextIteration = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
  
    var timer = setTimeout(animateFirefly, nextIteration);
  
    function animateFirefly() {
      var red = (Math.random() * 255) >> 0;  
      var green = (Math.random() * 255) >> 0;
      var blue = (Math.random() * 255) >> 0;
      var randomX = (deltaDistance) * Math.random() - deltaDistance / 2;
      var randomY = (deltaDistance) * Math.random() - deltaDistance / 2;
      var image = `radial-gradient(white 5%, rgba(${red},${green},${blue},.5) 15%, transparent 60%)`;
      var newPosition = {
        left: position.left + randomX + 'px',
        top: position.top + randomY + 'px',
        'background-image': image
      }
      $(element).css(newPosition);
      nextIteration = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
      timer = setTimeout(animateFirefly, nextIteration);
  
    }
  }