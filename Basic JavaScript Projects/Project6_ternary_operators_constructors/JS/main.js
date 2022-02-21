function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;

    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// voting challenge
function voteFunction(){
    var age, canVote;
    age = document.getElementById("Age").value;

    canVote = (age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = canVote + " to vote.";
}

// Constructor
function myFunc(name, age, canVote){
    this.name = name;
    this.age = age;
    canVote = (age >= 18) ? "old enough":"too young";
    this.canVote = canVote;
}
// Initializing new object
var Bryan = new myFunc("Bryan", 27);

// Remodelized vote function
function voteFunc2(){
    document.getElementById("New_and_This").innerHTML = 
        Bryan.name + " is " + Bryan.age + " years old and is "
        + Bryan.canVote + " to vote.";
}

// Nested function
function pickNumber(num){
    this.number = num;
    addFive();

    // add 5 to number function
    function addFive(){
        return number += 5;
    }
    document.getElementById("Nested_Function").innerHTML = number;
}