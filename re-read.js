const age = 22 // declared variable type const, assigned with int value 22, named age
const location = 'Texas' // declared variable type const, assigned value 'Texas', named location

// if / else statement // two outcomes
if (age >= 18 && location === 'Texas') { // checks if age variable is greater than or equal to 18 AND location variable string matches 'Texas'
    console.log('You are eligible to vote in Texas.') // logs a message confirming that both conditions are true
} else { // if the above didn't run because one or more conditions were not met then run this
    console.log('You are not eligible to vote in Texas.') // logs a message confiriming person is not eligible to vote due to conditions not being met
}


function sum(numOne, numTwo) { // declared function // named sum // takes in two parameters
    return numOne + numTwo; // returns the sum of the arguments
}
// log the sum of 2 and 6 using the function
console.log(sum(2, 6)); // 8