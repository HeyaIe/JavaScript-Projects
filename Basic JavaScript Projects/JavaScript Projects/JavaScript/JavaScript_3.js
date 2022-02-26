// data attribute
function displayDescription(sauce){
    var sauceName = sauce.getAttribute("data-name");

    switch(sauceName){
        case "Mad Dog 357":
            alert(sauceName + " is one of the hottest sauces in the world, packing 357,000 Scoville Heat Units, one hit will surely blow you away!")
            break;
        case "The End Sauce":
            alert(sauceName + " is measured with approximately 6mil SKU, you've been warned!");
            break;
        case "No. 9 Plutonium":
            alert(sauceName + " is ranked the hottest sauce in the world with 9mil SKU. Precautionary actions should be planned.")
            break;
        default:
            alert("nada");
    }

}

