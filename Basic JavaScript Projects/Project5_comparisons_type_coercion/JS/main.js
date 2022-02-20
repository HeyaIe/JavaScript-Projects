// typeof operator
document.write(typeof "Hello, World!" + "<br><br>");

// type coercion
document.write("I am " + 27 + " years old.<br><br>");

// NaN result
function test_func(){
    document.getElementById("test").innerHTML = 0/0;
}

// boolean results for isNaN
function isNumber(){
    document.getElementById("test2").innerHTML = isNaN("string");
}

function isNumber1(){
    document.getElementById("test3").innerHTML = isNaN(30);
}

// console log
console.log(27 + 6 + 3);
console.log(30 * 2 > 100);

// equal check
function isEqual(num1, num2){
    return num1 == num2;
}

// without type coercion
function isEquivalent(a, b){
    return a === b;
}

// not operator
function notOp(num1, num2){
    return !(num1 > num2);
}