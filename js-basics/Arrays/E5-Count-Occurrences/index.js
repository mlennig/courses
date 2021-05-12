/************ Arrays: Exercise 5 - Count Occurences ************/

const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences2(numbers, 1);

console.log(count);

/* function countOccurrences(array, searchElement){
    let count = 0;

    for(let element of array){
        if(element === searchElement){
            count++;
        }
    }
    return count;
} */

// Using "reduce"
// This reduce method has 2 elements
// The first is a callback method
// The second is the initial value for the accumulator
function countOccurrences2(array, searchElement){

    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        console.log(accumulator, currentValue, searchElement);
        return accumulator + occurrence;
    }, 0);
}