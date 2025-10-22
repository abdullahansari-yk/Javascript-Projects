const form1 = document.querySelector("form");
const form2 = document.querySelector("#form2");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

// const userValue = document.querySelector("input");

// const form = document.querySelectorAll("form");
const userValue1 = document.querySelector("#celsius_temperature");
const userValue2 = document.querySelector("#fahrenheit_temperature");

// form.forEach(function (f) {
//   f.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const value1 = parseInt(userValue1.value);
//     const value2 = parseInt(userValue2.value);
//     console.log(value1);
//     console.log(value2);
//   });
// });

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseInt(userValue1.value);
  console.log(value);

  const fValue = value * (9 / 5) + 32;

  const p = document.createElement("p");
  p.innerHTML = `Temperatue in F is ${fValue}`;
  p.classList.add("result");
  form1.appendChild(p);
});

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(userValue2.value);
  console.log(value);

  const cValue = (value - 32) * (5 / 9);

  const p = document.createElement("p");
  p.innerHTML = `Temperatue in F is ${cValue}`;
  p.classList.add("result");
  form2.appendChild(p);
});
