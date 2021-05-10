// Control  Flow: Exercise 8 - Sum of Multiples of 3 and 5

/* e.g. */
// console.log(sum(10))
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// sum = 33

console.log(sum(10));

function sum(limit){
    let sum = 0;
    
    for(number = 0; number <= limit; number++) {
        if((number % 3 === 0) || (number % 5 === 0)){
            sum += number;
        }
        else continue;
    }
    return sum;
}

