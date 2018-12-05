// var path = document.querySelector('.squiggle-animated path');
// var length = path.getTotalLength();
// // Clear any previous transition
// path.style.transition = path.style.WebkitTransition =
//   'none';
// // Set up the starting positions
// path.style.strokeDasharray = length + ' ' + length;
// path.style.strokeDashoffset = length;
// // Trigger a layout so styles are calculated & the browser
// // picks up the starting position before animating
// path.getBoundingClientRect();
// // Define our transition
// path.style.transition = path.style.WebkitTransition =
//   'stroke-dashoffset 2s ease-in-out';
// // Go!
// path.style.strokeDashoffset = '0';


//Typewriter effect
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = ["hi, i'm rika!"];
  
  // type one text in the typewriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});


//Show description after a few seconds
window.onload=function()  //executes when the page finishes loading
{
	setTimeout(func1, 1700); //milliseconds
	
};
function func1()
{
	document.getElementById("descr").className="show";
}






















