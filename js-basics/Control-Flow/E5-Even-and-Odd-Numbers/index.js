// Control  Flow: Exercise 5 - Even and Odd Numbers

showNumbers(10);

function showNumbers(limit){
    // Iterate through values from 0 to limit
    // and prints their parity.
    for(i = 0; i <= limit; i++) console.log(i, (i % 2 === 0) ? 'EVEN' : 'ODD');
}

function showNumbers_2(limit){
    // Include input validation
    if(typeof(limit) !== 'number'){
        // Input is not a number
        console.log('Your input is not a number, friend.');
        return;
    }
    for(i = 0; i <= limit; i++) console.log(i, (i % 2 === 0) ? 'EVEN' : 'ODD');
}