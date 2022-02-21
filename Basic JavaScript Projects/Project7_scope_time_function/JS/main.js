// Global variable
var x = 10;

function addFive(){
    // Local variable
    var y = 30;

    console.log(x + 5);
}

// Error function
function undefinedVar(){
    console.log(y);
}

addFive();
undefinedVar();


// Conditional statement
function appointment(){

    // local variables
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    var scheduledAppointment = 18;

    if(hours <= scheduledAppointment){
        // Check if difference is within an hour
        if(hours + 1 == scheduledAppointment && minutes > 0){
            hours += 1;
            var hourDiff = scheduledAppointment - hours;
            var minDiff = 60 - minutes;

            document.getElementById("difference").innerHTML = "Time till appointment: "
                + hourDiff + ":" + minDiff;
        }
        else{
            document.getElementById("difference").innerHTML = "You are "
                + minutes + " minutes late for your appointment!";
        }
    }
    else{
        document.getElementById("difference").innerHTML = "You missed your appointment!";
    }   
}

// else function
function withdraw(){
    var withdrawAmount = document.getElementById("amount").value;

    if(withdrawAmount >= 0){
        document.getElementById("withdraw").innerHTML = 
            "You have withdrawn $" + withdrawAmount + ".";
    }
    if(withdrawAmount >= 1001){
        document.getElementById("withdraw").innerHTML =
            "Please speak to one of our bank tellers to proceed."
    }else{
        document.getElementById("withdraw").innerHTML =
            "Unable to process amount, please try again."
    }
}


// else if statements
function getDay(){
    this.Day = new Date().getDay();

    if(Day == 0){
        Day = "Sunday";
    }
    else if(Day == 1){
        Day = "Monday";
    }
    else if(Day == 2){
        Day = "Tuesday";
    }
    else if(Day == 3){
        Day = "Wednesday";
    }
    else if(Day == 4){
        Day = "Thursday";
    }
    else if(Day == 5){
        Day = "Friday";
    }
    else{
        Day = "Saturday";
    }

    document.getElementById("Day").innerHTML = Day;
}

// else if function
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning!";
    }
    else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon!";
    }
    else{
        Reply = "It is evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}



