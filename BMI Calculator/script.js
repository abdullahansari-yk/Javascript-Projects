const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#answer");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please provide a valid height";
    result.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please provide a valid weight";
    result.style.color = "red";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}`;
    result.style.color = "green";
  }
});
