/************ Arrays: Exercise 4 - Moving an Element ************/

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, -5);

console.log(output);
//console.error('Invalid');

/* function move(array, index, offset){
    const dummy = null;
    if(index + offset >= array.length || index + offset <= 0) {
        console.error('Invalid');
        return;
    }

    else {
        dummy = array[index + offset];
        array[index + offset] = array[index];
        array[index] = dummy;
        return array;
    }

} */

function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];

    // Items removed will be returned as an array
    const element = output.splice(index, 1)[0];

    output.splice(position, 0, element);

    return output;

}