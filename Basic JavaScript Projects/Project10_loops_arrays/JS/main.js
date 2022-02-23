// While loop
function greet(){
    var people = ["Bryan", "Heyale", "Amberlin"];
    var counter = 0;
    var message = "";

    while(counter < people.length){

        message += "Good afternoon, " + people[counter] + ".<br>";
        ++counter;
    }
    document.getElementById("Loop").innerHTML = message;
}

// For loop
function forloop(){
    
    var languages = ["Python", "JavaScript", "C#", "C++", "Ruby"];
    content = "";
    
    for(var x = 0; x < languages.length; ++x){
        if(languages[x] == "JavaScript"){
            content += "I am currently learning " + languages[x] + ".<br>";
        }
        else{
            content += "I am interested in learning " + languages[x] + ".<br>";
        }
    }
    document.getElementById("languages").innerHTML = content;
}

// Array function

function test(){
    var fruits = ['apple', 'orange', 'banana', 'pear'];
    
    if(fruits.includes(document.getElementById("fruit").value)){
        
        var deleteCount = 1;
        var removed = fruits.splice(fruits.indexOf(document.getElementById("fruit").value), deleteCount);
        document.getElementById("removed").innerHTML = 
        removed + " has been removed.";

        document.getElementById("removed").innerHTML = fruits;
    }
    else{
        document.getElementById("removed").innerHTML =
        "Invalid response, please try again.";
    }
    
}

// const object
const dog = {
    breed: "Border Collie",
    gender: "female",
    age: 1,
    coat: "white-brown"
}
// function that displays a string of const object
function constantFunction(){

    // Changing/adding property value
    dog.age = 2;
    dog.active = "active";

    document.getElementById("Constant").innerHTML = 
    "My " + dog.gender + " " + dog.breed + " is " + dog.age + " years old with a " + dog.coat + " coat. She is very " + dog.active + ".";
}

// let scope
function scope(){
    var i = 10;
    {
        let i = 5;
        document.getElementById("let").innerHTML = i;
    }
    document.getElementById("var").innerHTML = i;
}

// return statement
function addFive(){
    
    return document.getElementById("result").innerHTML = Number(document.getElementById("a").value) + 5;
}

// Object method
function objMethod(){
    let person = {
        name: "Bryan",
        age: 27,
        height: "5\'10",
        weight: "170 pounds",
        description: function(){
            return this.name + " is " + this.age + " years old. " + this.height + ", " + this.weight + ".";
        }
    }
    document.getElementById("object").innerHTML = person.description();
}

// Break and continue statements
function contBreak(){
    let text = "";
    for(let i=1; i<10; ++i){
        // Skip 3
        if(i===3){
            continue;   
        }
        // end the loop
        else if(i==7){
            break;
        }
        else{
            text += i + "<br>";
        }
    }
    document.getElementById("contBreak").innerHTML = text;
}