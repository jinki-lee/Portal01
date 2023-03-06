const convertBtn = document.getElementById('convertBtn');
const inputNumber = document.getElementById('inputNumber');
const result = document.getElementById('result');convertBtn.addEventListener('click', () => {  const num = Number(inputNumber.value);  if (isNaN(num)) {    result.textContent = 'Please enter a valid number.';  } else {    result.textContent = num;  }
});

