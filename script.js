let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('result').value = currentInput;
}

function appendSign(sign) {
  currentInput += sign;
  document.getElementById('result').value = currentInput;
}

function clearResult() {
  currentInput = '';
  document.getElementById('result').value = '';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput);
    document.getElementById('result').value = currentInput;
  } catch {
    document.getElementById('result').value = 'Error';
  }
}
