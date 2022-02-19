function additionFunction(){
    var result = 3 + 1;
    
    document.getElementById("Math").innerHTML = result;
}

function subtractionFunction(){
    var result = 5 - 2;

    document.getElementById("subtraction").innerHTML = result;
}

function multiplication(){
    var result = 3 * 3;

    document.getElementById("multiplication").innerHTML = result;
}

function division(){
    var result = 100 / 10;

    document.getElementById("division").innerHTML = result;
}

function multipleOperators(){
    var result = (50 + 60) / 2 - 10 * 3;

    document.getElementById("multipleOp").innerHTML = result;
}

function modulusOperator(){
    var result = 32 % 5;

    document.getElementById("modulus").innerHTML = result;
}

// negation operator
function negationOperator(){
    var result = 20;

    document.getElementById("negative").innerHTML = -result;
}

//
function degToRad(degrees){
    result = degrees * (Math.PI / 180);

    document.getElementById("radians").innerHTML = result;
}

