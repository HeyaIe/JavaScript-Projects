// This variable keeps track of whose turn it is
let activePlayer = "X";

// This array stores an array of moves. Use this to determine
// win conditions
let selectedSquares = [];

// This function is for placing an X or O in a square
function placeXOrO(squareNumber){
    
    // This condition ensures a square hasn't been selected already
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        
        // Variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);

        // This condition checks who's turn it is
        if(activePlayer === "X"){
            select.style.backgroundImage = "url('media/images/xx.png')";
            select.style.backgroundRepeat = "no-repeat";
            select.style.backgroundPosition = "center center";
            
        }
        else{
            select.style.backgroundImage = "url('media/images/oo.png')";
            select.style.backgroundRepeat = "no-repeat";
            select.style.backgroundPosition = "center center";
        }
        // squareNumber and activePlayer are concatenated together
        // and added to array
        selectedSquares.push(squareNumber + activePlayer);

        // Check win conditions
        checkWinConditions();

        // Change active player
        if(activePlayer === "X"){
            activePlayer = "O";
        }
        else{
            activePlayer = "X";
        }
        // Play placement sound
        audio("./media/place.mp3");

        if(activePlayer === "O"){
            
            // Disables clicking for computer choice
            disableClick();
            // Set delay before computer places image and enavbles click
            setTimeout(function (){ computersTurn(); }, 1000);
        }
        return true;
    }
    // This function results in a random square being selected
    function computersTurn(){
        
        // flag
        let success = false;
        
        // This variable stores a random number 0-8
        let pickASquare;
        
        // This condition allows while loop to keep trying if
        // a square is selected already
        while(!success){
            
            // A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
           
            // If the random number evaluated returns true, the 
            // square hasn't been selected yet.
            if(placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

// This function parses the selectedSquares array to search for
// win conditions.
function checkWinConditions(){
    if(arrayIncludes("0X", "1X", "2X")){
        drawWinLine(50, 100, 558, 100);
    }
    else if(arrayIncludes("3X", "4X", "5X")){
        drawWinLine(50, 304, 558, 304);
    }
    else if(arrayIncludes("6X", "7X", "8X")){
        drawWinLine(50, 508, 558, 508);
    }
    else if(arrayIncludes("0X", "3X", "6X")){
        drawWinLine(100, 50, 100, 558);
    }
    else if(arrayIncludes("1X", "4X", "7X")){
        drawWinLine(304, 50, 304, 558);
    }
    else if(arrayIncludes("2X", "5X", "8X")){
        drawWinLine(508, 50, 508, 558);
    }
    else if(arrayIncludes("6X", "4X", "2X")){
        drawWinLine(100, 508, 510, 90);
    }
    else if(arrayIncludes("0X", "4X", "8X")){
        drawWinLine(100, 100, 520, 520);
    }
    else if(arrayIncludes("0O", "1O", "2O")){
        drawWinLine(50, 100, 558, 100);
    }
    else if(arrayIncludes("3O", "4O", "5O")){
        drawWinLine(50, 304, 558, 304);
    }
    else if(arrayIncludes("6O", "7O", "8O")){
        drawWinLine(50, 508, 558, 508);
    }
    else if(arrayIncludes("0O", "3O", "6O")){
        drawWinLine(100, 50, 100, 558);
    }
    else if(arrayIncludes("1O", "4O", "7O")){
        drawWinLine(304, 50, 304, 558);
    }
    else if(arrayIncludes("2O", "5O", "8O")){
        drawWinLine(508, 50, 508, 558);
    }
    else if(arrayIncludes("6O", "4O", "2O")){
        drawWinLine(100, 508, 510, 90);
    }
    else if(arrayIncludes("0O", "4O", "8O")){
        drawWinLine(100, 100, 520, 520);
    }
    else if(selectedSquares.length >= 9){
        // Play tie audio
        audio("./media/tie.mp3");
        // Set a timer to reset game
        setTimeout(function(){ resetGame(); }, 1000);
    }   
}

// This function checks if an array includes 3 strings.
function arrayIncludes(squareA, squareB, squareC){
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    if(a === true && b === true && c === true){
        return true;
    }
}

// This function makes our body element temporarily unclickable
function disableClick(){
    body.style.pointerEvents = "none";
    
    // Set a delay before enabling clicks
    setTimeout(function(){ body.style.pointerEvents = "auto";}, 1000);
}

// This function takes a string parameter of the path you set
// ealier for placement sound
function audio(audioURL){
    let audio = new Audio(audioURL);
    audio.play();
}

// This function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    const canvas = document.getElementById("win-lines");

    // This variable gives access to methods and properties
    // to use on canvas
    const c = canvas.getContext("2d");

    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        // This variable stores temporary x axis data we update
        // in our animation loop
        x = x1,
        // This variable stores temporary y axis data we update
        // in our animation loop
        y = y1;

    // This function interacts with the canvas
    function animateLineDrawing(){
        
        // This variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        // This method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);

        // This method starts a new path
        c.beginPath();

        // This method moves us to a starting point for our line
        c.moveTo(x1, y1);

        // This method indicates the end point in our line
        c.lineTo(x, y);

        // This method sets the width of our line
        c.lineWidth = 10;
        c.strokeStyle = "rgba(255, 191, 0, .8)";

        // This method draws everything laid out above
        c.stroke();

        // This condition checks if we've reached the endpoint
        if(x1 <= x2 && y1 <= y2){
            if(x < x2){
                x += 10;
            }
            if(y < y2){
                y += 10;
            }
            if( x>= x2 && y >= y2){
                cancelAnimationFrame(animationLoop);
            }
        }
        // This conditition is similar to the one above
        if(x1 <= x2 && y1 >= y2){
            if(x < x2){
                x += 10;
            }
            if(y > y2){
                y -= 10;
            }
            if(x >= x2 && y <= y2){
                cancelAnimationFrame(animationLoop);
            }
        }
    }
    // This function clears our canvas after win line is drawn
    function clear(){
        // This line starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        // This line clears canvas
        c.clearRect(0, 0, 608, 608);
        // This line stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    // This line disallows clicking while the win sound is playing
    disableClick();
    audio("./media/win.wav");
    // This line calls the main animation loop
    animateLineDrawing();
    // Set delay, clears canvas, resets game, and allows clicking
    setTimeout(function(){ clear(); resetGame();}, 1000);
}

// This function resets the game in the event of a tie or a win
function resetGame(){
    // This for loop iterates thorugh each HTML square element
    for(let i = 0; i < 9; ++i){
        let square = document.getElementById(String(i));

        // Remove elements' background image
        square.style.backgroundImage = "";
    }
    // Reset array
    selectedSquares = [];
}