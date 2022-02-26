// Switch case
function whatDay(){
    let day;
    let message;

    switch(new Date().getDay()){
        case 0:
            day = "Sunday";
            message = "Today is " + day + ".";
            break;
        case 1:
            day = "Monday";
            message = "Today is " + day + ".";
            break;
        case 2:
            day = "Tuesday";
            message = "Today is " + day + ".";
            break;
        case 3:
            day = "Wednesday";
            message = "Today is " + day + ".";
            break;
        case 4:
            day = "Thursday";
            message = "Today is " + day + ".";
            break;
        case 5:
            day = "Friday";
            message = "Today is " + day + ".";
            break;
        case 6:
            day = "Saturday";
            message = "Today is " + day + ".";
            break;
        default:
            message = "Undefined."
    }
    return message;
}

document.getElementById("Day").innerHTML = whatDay();

// Utilizing getElementsByClassName()
function Hello_World_Function(){
    var A = document.getElementsByClassName("Click");

    for(var i=0; i<A.length-1; ++i){
        A[i].innerHTML = "The text has changed!";
    }
}

// Canvas element
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 20, 30, 120);
var grd2 = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "lightgoldenrodyellow");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);