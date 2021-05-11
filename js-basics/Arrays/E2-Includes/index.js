/************ Arrays: Exercise 2 - Includes ************/

const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

/* Instructions */
// Implement includes as if it doesn't already exist

function includes(array, searchElement){
    for(let number of array){
        if(number === searchElement) return true;       
    }
    return false;
}

console.log(includes(numbers, 6));