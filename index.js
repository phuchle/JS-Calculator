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
        storeMemory();
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
  cache = cache.join('').replace(/÷/g, '/').replace(/×/g, '*');
  cache = eval(cache);
  updateDisplay();
  cache = [];
}

var storeMemory = () => {
  var display = document.querySelector("div#display");
  cache.push(display.innerText);
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
