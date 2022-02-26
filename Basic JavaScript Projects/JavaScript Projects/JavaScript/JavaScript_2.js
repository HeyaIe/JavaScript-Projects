function validateForm(){

    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["email"].value;
    let z = document.forms["myForm"]["message"].value;

    // Validation
    if(x == ""){
        alert("Name must be filled out");
        return false;
    }
    if(y == ""){
        alert("Please enter email");
        return false;
    }
    if(z == ""){
        alert("Please enter message");
        return false;
    }
}
