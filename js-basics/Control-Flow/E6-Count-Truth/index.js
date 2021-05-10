// Control  Flow: Exercise 6 - Count Truthy

/* Instructions */
/* Falsy Values */
// undefined
// null
// ''
// 0
// NaN
// e.g. const array = [0, null, undefined, '', 2, 3]; // Returns 2

const array = [0, null, undefined, '', 2, 3, true, 'yes'];
countTruthy2(array);

function countTruthy(array){
    let nTruthys = 0;
    for(i = 0; i < array.length; i++){
        if((array[i] !== 0) && (array[i] !== null) && (array[i] !== undefined) && (array[i] !== '')){
            // element at array [i] is not falsy
            nTruthys++;
        }
        // element at array[i] is falsy
        else continue;
    }
    console.log('No. of truthy values is', nTruthys);
}

function countTruthy2(array){
    let nTruthys = 0;
    for(let value of array){
        if(value){
            // element at array [i] is not falsy
            nTruthys++;
        }
        // element at array[i] is falsy
        else continue;
    }
    console.log('No. of truthy values is', nTruthys);
}
