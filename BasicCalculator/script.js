const buttons = document.querySelectorAll("button");
const userInput = document.querySelector("#input_field");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML);

    if (e.target.innerHTML === "=") {
      string = eval(string);
    } else if (e.target.innerHTML === "C") {
      string = "";
    } else {
      string += e.target.innerHTML;
    }
    userInput.value = string;
  });
});
