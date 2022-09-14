let firstNumber = null;
let secondNumber = null;
let plusSign = null;
let sumResult = null;

function getNumber() {
  firstNumber = document.getElementById(numbers).value;
  secondNumber = document.getElementById(numbers).value;
  plusSign = document.getElementById(plus).value;

  if (
    firstNumber === document.getElementById(numbers).value &&
    secondNumber === document.getElementById(numbers).value &&
    plusSign === document.getElementById(plus).value
  ) {
    sumResult = firstNumber + secondNumber;
  }
}

console.log(sumResult);
