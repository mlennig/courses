/************ Arrays: Exercise 1 - Array from Range ************/

const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max){
    const numbersArray = [];

    for(let i = min; i <= max; i++) numbersArray.push(i);
    
    return numbersArray;
}

