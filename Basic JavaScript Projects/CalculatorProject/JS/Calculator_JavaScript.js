// Create an object to keep track of values
const Calculator = {

    // Display 0 on the screen
    Display_Value: "0",

    // This will hold the first operand for any expressions
    First_Operand: null,

    // Check if second operand has been input
    Wait_Second_Operand: false,

    // This will hold the operator
    Operator: null
};

// This modifies values each time a button is clicked
function Input_Digit(digit){
    // Object destructuring
    const { Display_Value, Wait_Second_Operand } = Calculator;

    // If Wait_Second_Operand true and set Display_Value to
    // the key that was clicked
    if(Wait_Second_Operand === true){
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else{
        // Overwrites Display_Value if the current value is 0
        // otherwise, it adds onto it
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}
// This section handles decimal points
function Input_Decimal(dot){

    // This ensures that accidental clicking of decimal point
    // does not cause bugs in your operation
    if(Calculator.Wait_Second_Operand === true) return;
    
    // If Display_value does not contain a decimal point
    // add a decimal point
    if(!Calculator.Display_Value.includes(dot)){
        Calculator.Display_Value += dot;
    }
}
// This section handles operators
function Handle_Operator(Next_Operator){
    const { First_Operand, Display_Value, Operator } = Calculator;

    // When operator key is pressed, convert the current number
    // displayed to a number and store in Calculator.First_Operand
    // if it does not exist
    const Value_of_Input = parseFloat(Display_Value);

    // Checks if an operator already exists and if Wait_Second_Operand is true,
    // then updates the operator and exits from the function
    if(Operator && Calculator.Wait_Second_Operand){
        Calculator.Operator = Next_Operator;
        return;
    }
    if(First_Operand == null){
        Calculator.First_Operand = Value_of_Input;
    }
    else if(Operator){
        const Value_Now = First_Operand || 0;

        // If operator exists, property lookup is performed for
        // the operator in the Perform_Calculation object and the
        // function that matches the operator is executed
        // Is there a name for this expression? For research
        let result = Perform_Calculation[Operator](Value_Now, Value_of_Input);

        // Add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        // Remove any trailing 0's
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.Operator = Next_Operator;
}
const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    "=": (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset(){
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.Operator = null;
}
// This function updates the screen with the contents of Display_Value
function Update_Display(){
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}
Update_Display();

// This section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {

    // The target variable is an object that represents
    // the element that was click
    const { target } = event;

    // If the element that was clicked on is not a button,
    // exit the function
    if(!target.matches("button")){
        return;
    }
    if(target.classList.contains("operator")){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if(target.classList.contains("decimal")){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    // Ensures that AC clears the numbers from the calculator
    if(target.classList.contains("all-clear")){
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})