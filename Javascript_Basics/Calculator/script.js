

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (this.id === "clear") {
      display.value = "";
    } else if (this.id === "equals") {
      display.value = eval(display.value);
    } else {
      display.value += this.textContent;
    }
  });
});
