function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('result');

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = 'Please enter valid height and weight.';
    result.className = '';
    return;
  }

  const bmi = weight / Math.pow(height / 100, 2);
  let category, cls;

  if (bmi < 18.5)       { category = 'Underweight'; cls = 'under'; }
  else if (bmi < 25)    { category = 'Normal';      cls = 'normal'; }
  else if (bmi < 30)    { category = 'Overweight';  cls = 'over'; }
  else                   { category = 'Obese';       cls = 'obese'; }

  result.textContent = `BMI: ${bmi.toFixed(1)} (${category})`;
  result.className = cls;
}   