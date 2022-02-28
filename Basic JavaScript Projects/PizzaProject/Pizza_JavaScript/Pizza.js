function getReceipt(){
    // Initalize string
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for(var i=0; i<sizeArray.length; ++i){
        if(sizeArray[i].checked){
            // slectedSize = checked pizza size
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    // Update sizeTotal
    if(selectedSize === "Personal Pizza"){
        sizeTotal = 10;
    }
    else if(selectedSize === "Small Pizza"){
        sizeTotal = 12;
    }
    else if(selectedSize === "Medium Pizza"){
        sizeTotal = 15;
    }
    else if(selectedSize === "Large Pizza"){
        sizeTotal = 18;
    }
    else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 20;
    }
    // Update runningTotal
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    
    // These variables will get passed on to each function
    getTopping(runningTotal, text1);
}
// This function checks for selected toppings, gives 1 free topping,
// displays total and user's order
function getTopping(runningTotal, text1){
    // Initalize counter
    var toppingTotal = 0;
    // Initalize empty array
    var selectedTopping = [];

    var toppingArray = document.getElementsByClassName("toppings");
    for(var j=0; j<toppingArray.length; ++j){
        // Checks to see if any element in the array is checked
        if(toppingArray[j].checked){
            // Adds selected topping to array
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            // Updates text1 string
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    // Assign total number of selected toppings to toppingCount
    var toppingCount = selectedTopping.length;
    if(toppingCount > 1){
        // Ensures that 1 topping is less than total
        toppingTotal = (toppingCount - 1);
    }
    else{
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"
        + runningTotal + ".00" + "</strong></h3>";
}