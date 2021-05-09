// Control  Flow: Exercise 3 - FizzBuzz //

/* Instructions */
// Divisble by 3 => Fizz
// Divisble by 5 => Buzz
// Not divisble by 3 or 5 => input
// Not a number => 'Not a number'

let b = 'test';
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if(typeof(input) !== 'number'){
        return NaN;
    }
    else if(input % 3 === 0){
        // Input is divisible by 3
        if(input % 5 === 0){
            // Input is divisible by both 3 and 5
            return 'Fizzbuzz';
        }
        return 'Fizz';
    }
    else if(input % 5 === 0){
        // Input is divisible by 5
        return 'Buzz'
    }
    // Input is not divisible by 3 or 5
    else return input;        
}