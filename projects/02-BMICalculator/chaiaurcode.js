const form = document.querySelector('form');

// if your declare height then it will store empty value , coz whenever the page will load it will store automatically .
// but want to store when we enter any value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    if (bmi < 18.6) {
      results.innerHTML = `<strong style="color: black;"><span>${bmi}</span> <p>Underweight</p></strong>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<strong style="color: black;"><span>${bmi}</span> <p>Normal Range</p></strong>`;
    } else {
      results.innerHTML = `<strong style="color: black;"><span>${bmi}</span> <p>Overweight</p></strong>`;
    }
  }
});