//////////////////// Exercise 1 - Sum of Arguments ////////////////////

/* Instructions */
// sum(1, 2, 3, 4) => 10
// sum([1, 2, 3, 4]) => 10
// Use Array.isArray()

console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4]));

function sum(...items){
if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

