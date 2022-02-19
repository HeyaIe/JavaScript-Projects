function getInfo(){
    var bryan = {
        age: 27,
        employed: "No",
        homeOwner: "No",
        citizenship: "Canadian",
    }
    // deleting a key value pair
    delete bryan.homeOwner;
    document.getElementById("homeOwner").innerHTML = bryan.homeOwner;

    document.getElementById("age").innerHTML = bryan.age;
}