const form = document.querySelector('form');

form.addEventListener('submit', function (e){
  e.preventDefault();

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const results = document.querySelector('#results');
  const final_results = document.querySelector('#final-result');
  const bmi = (weight / ((height*height) / 10000)).toFixed(2);

  results.innerHTML = `Your BMI is: ${bmi}`;

  if (bmi > 24) {
    final_results.innerHTML = `You are Over-weight Person with BMI ${bmi}`
  } else if (bmi < 18.6){
    final_results.innerHTML = `You are Under-weight Person with BMI ${bmi}`
  } else {
    final_results.innerHTML = `You are Normal-weight Person with BMI ${bmi}`
  };

});
