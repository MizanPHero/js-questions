function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Error: Cannot divide by zero';
        }
        return num1 / num2;
      default:
        return 'Error: Invalid operator';
    }
  }
  
  const number1 = 10;
  const number2 = 5;
  const operator = '+';
  
  const result = calculator(number1, number2, operator);
  console.log(result);
  