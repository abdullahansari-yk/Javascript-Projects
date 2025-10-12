const boxes = document.querySelectorAll(".box");
// console.log(box);
const body = document.querySelector("body");

boxes.forEach(function (box) {
  console.log(box);

  box.addEventListener("click", function (e) {
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
  });
});