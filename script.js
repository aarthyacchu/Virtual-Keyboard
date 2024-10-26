let inputBox = document.getElementById("inputBox");
let heading = document.getElementById("heading");
let buttons = document.getElementsByClassName("btn");

function display() {
  heading.textContent = inputBox.value;
}

// physical keyboard 
inputBox.addEventListener("keyup", (event) => {
  if (event.key === "Backspace") {
    // If Backspace
    inputBox.value = inputBox.value.slice(0, -1);
  } else if (event.key.length === 1) {
    // add values
    inputBox.value += event.key;
  }
  display();
  event.preventDefault();
});

//  virtual button
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    let key = button.getAttribute("data-key");

    // Handle special keys
    if (key === "delete") {
      // Delete last chr
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (key === " ") {
      // space
      inputBox.value += " ";
    } else {
      inputBox.value += key;
    }
    display();
  });
});
