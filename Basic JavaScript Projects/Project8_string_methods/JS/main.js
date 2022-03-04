// concat() method
function concatenate(){
    var intro = "Hello, ";
    var name = document.getElementById("name").value;
    var message = ", how are you today?";

    var wholeSentence = intro.concat(name, message);

    document.getElementById("message").innerHTML = wholeSentence;
}

// slice() method
function sliceMethod(){
    var string = "My name is Bryan";

    var sliced = string.slice(0, 11);

    document.getElementById("section").innerHTML = sliced;
}

// toUpperCase() method
function turnUpper(){
    var string = document.getElementById("string").value;

    if(string.length <= 20){
        var result = string.toUpperCase();

        document.getElementById("Upper").innerHTML = result;
    }
    else{
        document.getElementById("Upper").innerHTML = 
            "Choice of string is too long, please pick another."
    }
}

// search() method
function wordSearch(){
    var string = "it is our choices that show what we truly are, far more than our abilities.";
    var word = document.getElementById("WordSearch").value;

    
    if(word == "" || word == " "){
        document.getElementById("Index").innerHTML =
        "Please try again."
    }
    else if(string.includes(word)){
        var index = string.search(word);
        document.getElementById("Index").innerHTML = 
        "Your word begins in index " + index + ".";
    }
    else{
        document.getElementById("Index").innerHTML = 
        "Your word does not appear in the given string.";
    }
}

// toString() method
function stringMethod(){
    var x = document.getElementById("number").value;

    if(isNaN(x)){
        document.getElementById("return").innerHTML =
        "Please enter a number."
    }else{
        document.getElementById("return").innerHTML =
        "is " + x + " === " + "\"" + x + "\" after conversion?: " +
        (x.toString() === x.toString());
    }
}

// toPrecision() method
function precisionMethod(){
    var Pi = Math.PI;
    var precision = document.getElementById("precision").value;

    document.getElementById("PI").innerHTML = Pi.toPrecision(precision);
}

// toFixed() method
function roundMethod(){
    var Pi = Math.PI;
    var precision = document.getElementById("round").value;

    document.getElementById("PI1").innerHTML = Pi.toFixed(precision);
}

// valueOf() method
function getValue(){
    var languages = ["C#", "C++", "Ruby", "Python", "JavaScript"];

    document.getElementById("value").innerHTML = languages.valueOf();
}

window.addEventListener("DOMContentLoaded", () =>{
    document.body.classList.remove('fade-out');
});