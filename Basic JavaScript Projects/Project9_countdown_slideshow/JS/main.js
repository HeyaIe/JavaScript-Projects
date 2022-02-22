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

// Maneuver between slides
function plusSlides(n){
    showSlides(slideIndex += n);
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
    // Not sure how this whole loop works,
    // Doesn't the variable i resets to 0 everytime?
    for(i = 0; i < slides.length; ++i){
        slides[i].style.display = "none";
    }
    for(i = 0; i< dots.length; ++i){
        // Not too sure how the replace() method works,
        // Replacing className='dot' with " active"?
        // what is the 2nd argument?
        dots[i].className = dots[i].className.replace(" active", ""); 
        
    }
    
    // display slides[slideIndex]
    slides[slideIndex-1].style.display = "block"; // ?
    dots[slideIndex-1].className += " active"; // ?
}