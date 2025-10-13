const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#result");

  if ((height === "" || height < 0 || isNaN(height))) {
    results.innerHTML = "Please provide a Valid Height";
    results.style.color = "red";
  } else if ((weight === "" || weight < 0 || isNaN(weight))) {
    results.innerHTML = "Please provide a Valid Weight";
    results.style.color = "red";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result
    results.innerHTML = `<span>${bmi}</span>`;
    results.style.color = "green";
  }
});
