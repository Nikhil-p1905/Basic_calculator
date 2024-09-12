let display = document.getElementById('display');

// Function to handle input
function inputValue(value) {
    display.innerText += value;
}

// Function to calculate the result
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = '';
}

// Function to delete the last character
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}
// Function to display the calcultor
