//////////////////// Exercise 3 - Error Handling ////////////////////


/* Instructions */
// Add error-handling to our countOccurrences 
// If the first argument is not an array, throw an exception
// then wrap the two lines starting with 'const count' and 'console'
// with a try-catch block. You can also wrap all three lines together
// in a try-catch block. Catch the exception and log it on the console.

try{
const numbers = true;

const count = countOccurrences2(numbers, 1);
console.log(count);

}
catch(e){
    alert(e);
}

function countOccurrences2(array, searchElement){
    if(typeof array !== 'array')
        throw new Error('Value is not an array.');

    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurrence;
    }, 0);
}

