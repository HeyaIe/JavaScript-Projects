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