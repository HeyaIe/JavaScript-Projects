// alert(document.getElementById("p1").innerHTML);

function count_ten(){
    var digit = "";
    var x = 1;

    while(x < 11){
        digit += "<br>" + x;
        ++x;
    }
    document.getElementById("Counting_to_Ten").innerHTML = digit;
}

var s = "";

document.getElementById("x").innerHTML = s += "hi";
document.getElementById("x").innerHTML = s += "no";