// Popup
alert("Hello, World!");

// Assigning a string to a variable and printing it
var x = "1 + 2 = 3";
document.write(x + "<br>");

var A = "This is a string";

// Using fontcolor() method on var A
A = A.fontcolor("blue");

window.alert(A);
document.write(A + "<br>");

// Using backslash to enable quotations within a string
var b = "Don't, \"stop\"";
document.write(b + " "  + A + "<br>");

// Concatenating strings and assigning it to a variable
var B = "Concatenated" + " String";
document.write(B + "<br>");

// Assigning values to multiple variables in one line
var c = "Heyale", d = "Amberlin", e = "Victoria";
document.write(d + "<br>");

function My_First_Function(){
    var str = "This is the button text!";

    // Assining the str variable to the button element when
    // function is called.
    document.getElementById("Button_Text").innerHTML = str;
}