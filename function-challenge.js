function  numberOutput(num1, num2) {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;
    return Sum  = `Sum:${sum} Difference:${difference} Multiply:${multiply} Divide:${divide}`
}
console.log(numberOutput(1, 9));



const numberOutputExpression = function (num1, num2) {
    const addition = num1 + num2
    const subtraction = num1 - num2
    const multiplication = num1 * num2
    const division = num1 / num2
    return `āddition:${addition}, subtraction:${subtraction}, multiplication:${multiplication}, division:${division}`;
}
console.log(numberOutputExpression(10, 2));

const numberOutputArrow = (num1, num2) => {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;
    
    return `Sum: ${sum}, Difference: ${difference}, Multiplied: ${multiply}, Divided: ${divide}`;
}
console.log(numberOutputArrow(10, 2));