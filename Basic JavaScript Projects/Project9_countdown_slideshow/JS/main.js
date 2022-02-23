// function countdown(){
//     var seconds = document.getElementById("seconds").value;

//     function tick(){
//         seconds = seconds - 1;
//         timer.innerHTML = seconds;
//         var time = setTimeout(tick, 1000);
//         if(seconds == -1){
//             alert("Time's up!");
//             clearTimeout(time);
//             timer.innerHTML = "";
//         }
//     }
//     tick();
// }



// Global variables
var slideIndex = 1;
showSlides(slideIndex);
var myTimer;

// Pauses slideshow
function pause(){
    clearInterval(myTimer);
}
// Resumes slideshow
function resume(){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}

// Maneuver between slides
function plusSlides(n){
    clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  // Automatic slideshow
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}


// Show specific slide
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    // store slides
    var slides = document.getElementsByClassName("mySlides");
    // store dots
    var dots = document.getElementsByClassName("dot");
    
    
    if(n > slides.length){
        slideIndex = 1;
    }
    // n = 0, slideIndex = 3
    if(n < 1){
        slideIndex = slides.length;
    }
    
    // Removes all slides
    for(i = 0; i < slides.length; ++i){
        slides[i].style.display = "none";
    }
    for(i = 0; i< dots.length; ++i){
    
        dots[i].className = dots[i].className.replace(" active", ""); 
        
    }
    
    // display slides[slideIndex]
    slides[slideIndex-1].style.display = "block";
    // assigning class
    dots[slideIndex-1].className += " active";
}
