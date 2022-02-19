// addition operator
function additionFunction(){
    var result = 3 + 1;
    
    document.getElementById("Math").innerHTML = result;
}

// subtraction operator
function subtractionFunction(){
    var result = 5 - 2;

    document.getElementById("subtraction").innerHTML = result;
}

// multiplication operator
function multiplication(){
    var result = 3 * 3;

    document.getElementById("multiplication").innerHTML = result;
}

// division operator
function division(){
    var result = 100 / 10;

    document.getElementById("division").innerHTML = result;
}

// multiple operators
function multipleOperators(){
    var result = (50 + 60) / 2 - 10 * 3;

    document.getElementById("multipleOp").innerHTML = result;
}

// modulus operator
function modulusOperator(){
    var result = 32 % 5;

    document.getElementById("modulus").innerHTML = result;
}

// negation operator
function negationOperator(){
    var result = 20;

    document.getElementById("negative").innerHTML = -result;
}

// using Math.PI
function degToRad(degrees){
    result = degrees * (Math.PI / 180);

    document.getElementById("radians").innerHTML = result;
}

