// Remove class fade-out when DOM is loaded
window.addEventListener("DOMContentLoaded", ()=>{
    document.body.classList.remove("fade-out");
});

// Send out alert messages when form fields are not filled
function validateForm(){
    let fname = document.forms["myForm"]["fname"].value;
    if(fname === ""){
        alert("Please enter first name");
        return false;
    }

    let lname = document.forms["myForm"]["lname"].value;
    if(lname === ""){
        alert("Please enter last name");
        return false;
    }

    let phone = document.forms["myForm"]["phone"].value;
    if(phone === ""){
        alert("Please enter contact number");
        return false;
    }

    let email = document.forms["myForm"]["email"].value;
    if(email === ""){
        alert("Please enter email");
        return false;
    }
}

// Pop form
function openForm(){
    document.getElementById("myForm").style.display = "block";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

function magnify(imgID, zoom){
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);

    // Create glass
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    // Insert magnifier glass
    img.parentElement.insertBefore(glass, img);

    // Set background properties for the magnifier glass
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    // Execute function when magnifier moves over image
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    

    function moveMagnifier(e){
        
        var pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;

        // Prevent magnifier from moving outside the image
        if(x > img.width - (w/zoom)){
            x = img.width - (w/zoom);
        }
        if( x < w/zoom){
            x = w / zoom;
        }
        if(y > img.height - (h/zoom)){
            y = img.height - (h/zoom);
        }
        if(y < h/zoom){
            y = h / zoom;
        }
        // Set position of magnifier glass
        glass.style.left = (x+300) + "px";
        glass.style.top = (y-h) + "px";

        // Magnifier display
        glass.style.backgroundPosition = "-" + ((x*zoom) - w + bw) + "px -"
            + ((y*zoom) - h + bw) + "px";
    }
    function getCursorPos(e){
        var a, x = 0, y = 0;
        e = e || window.event;
    
        // Get x and y pos of image
        a = img.getBoundingClientRect();
    
        // Calculate the cursor's x and y coords, relative to image
        x = e.pageX - a.left;
        y = e.pageY - a.top;
    
        // Consider any page scrolling
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return{
            x: x, y: y
        };
    }
}




function openContact(){
    document.getElementById("contact").style.display = "block";
}

function closeContact(){
    document.getElementById("contact").style.display = "none";
}

                
                
