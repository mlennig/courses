// Control  Flow: Exercise 20 - Prime Numbers

/* Instructions */
// Prime (whose factors are only 1 and itself)
// 11 = 1, 11
// 13 = 1, 13

// Composite
// 12 = 1, 2, 3, 4, 6, 12 (factors of 12)
// Can be divided evenly by its factors

showPrimes(20);

// Make it modular
function showPrimes(limit){
    if(limit === 1) console.log('1 is neither prime nor composite');

    for(number = 2; number <= limit; number++) if(isPrime(number)) console.log(number);   
}

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

// OG design
function showPrimes2(limit){
    for(let number = 2; number <= limit; number++){
        let isPrime = true;
        for(let factor  = 2; factor < number; factor++){
            if(number % factor === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) console.log(number);
    }

}