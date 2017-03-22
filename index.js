// User Story: I can add, subtract, multiply and divide two numbers.
// User Story: I can clear the input field with a clear button.
// User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

// user pushes the numbers and operators to chain an expression
// the numbers are shown on the display and then the expression is executed when the equal button is pressed

// --- need a way to detect which buttons are pushed
// --- need a way to track the history of entered numbers and operations
// --- need to display the cache on #display as user presses buttons
// delete function
// equal function

var cache = [];

var detectButtonClick = () => {
  var buttons = document.querySelectorAll("div#numbers div span, div#operators p");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.id === "delete") {
        popFromCache(); // deletes one character from end of cache
      } else if (button.id === "clear") {
        clearCache();
      } else if (button.id === "equals") {
        sumCache();
      } else {
        storeButtonValue(button);
      }
    });
  });
}

var storeButtonValue = button => {
  cache.push(button.textContent);
  updateDisplay();
}

var popFromCache = () => {
  cache.pop();
  updateDisplay();
}

var clearCache = () => {
  cache = [];
  updateDisplay();
}

var sumCache = () => {
  // var operators = cache.join('').split(/\D+/);
  // var numbers = cache.join('').split(/\D/);
  cache = cache.join('').replace(/÷/, '/').replace(/×/, '*');
  cache = eval(cache);
  updateDisplay();
  cache = [];
}

var updateDisplay = () => {
  var display = document.querySelector("div#display");
  if (typeof cache === "number"){
    display.textContent = cache;
  } else {
    display.textContent = cache.join("");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  detectButtonClick();
});
