/************ Arrays: Exercise 6 - Get Max ************/

const numbers = [1, -6, 6, 1];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    if(array.length === 0) return undefined;

    let max = array[0];

    for(i = 1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

/* Challenge */
// Implement using reduce method
function getMax2(array){
    if(array.length === 0) return undefined;

    // If you don't pass an index for the initial value, 
    // the index will automatically be set to the first
    // value in the arry.
    return array.reduce((a, b) => (a > b) ? a : b);
}
