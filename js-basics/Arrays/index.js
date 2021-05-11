/************ Arrays: Notes ************/
///////////// Introduction /////////////
///////////// Adding Elements /////////////

// With const we cannot reassign numbers to something else, 
// but we can modify the content of this array 
/* const numbers = [3, 4]; 

// Add elements to the 
// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1,2);

// Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers); */

///////////// Finding Elements (Primitives) /////////////

/* const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a'));  // Returns -1
console.log(numbers.indexOf(1));    // Returns 0
console.log(numbers.indexOf('1'));  // Returns -1, type matters

console.log(numbers.lastIndexOf('1'));
console.log(numbers.lastIndexOf(1));    // Returns 3

// See if the element is in the array
console.log(numbers.indexOf(1) !== -1);

// Easier way to see if an element exists in the array
console.log(numbers.includes(1));

// Add a starting index to the search
console.log(numbers.indexOf(1, 2)); */

///////////// Finding Elements (Reference Types) /////////////

/* const courses = [
    {id: 1, name: 'a'}, 
    {id: 2, name: 'b'}, 
]; */

// Returns false because references aren't equal
// Because this is a reference
//console.log(courses.includes({id: 1, name: 'a'}));  

// Returns the first method that matches the function criteria
// aka the predicate/call-back function.
// Returns undefined if nothing matches the predicate.
/* console.log(courses.find(function(course){
    return course.name === 'a';
}));

console.log(courses.find(function(course){
    return course.name === 'xyz';
}));

console.log(courses.findIndex(function(course){
    return course.name === 'xyz';
}));

console.log(courses.findIndex(function(course){
    return course.name === 'a';
}));
 */

///////////// Arrow Functions /////////////

/* const courses = [
    {id: 1, name: 'a'}, 
    {id: 2, name: 'b'}, 
];

console.log(courses.find(function(course){
    return course.name === 'a';
}));
 */
// When there's only a single parameter, you can
// remove the paranthese around the parameter.
/* console.log(courses.find(course => {
    return course.name === 'a';
})); */

// If your function is one line, you can delete
// 'return' and eliminate the curly braces
// Read as 'course goes to course.name equals a'
//console.log(courses.find(course => course.name === 'a'));

// If you have no parameters, you have to pass 
// empty parantheses
/* console.log(courses.find(()=> {
    return course.name === 'a';
})); */

///////////// Removing ELements /////////////

//const numbers = [1, 2, 3, 4];

// End
/* const last = numbers.pop();
console.log(last); */

// Beginning
/* const first = numbers.shift();
console.log(first); */

// Middle
/* const middle = numbers.splice(2, 1);
console.log(numbers); */

// Middle - Delete multiple elements
// Delete 2 elements starting from index 2
/* const middle2 = numbers.splice(2, 2);
console.log(numbers); */

///////////// Emptying an Array /////////////

/* let numbers = [1, 2, 3, 4];
let another = numbers; */

// Solution 1
// Doesn't work if you have multiple references to the array
//numbers = [];                 // Pointing to new object in memory

// Solution 2
//numbers.length = 0;             // This will truncate the array 

// Solution 3
// A little noisy
//numbers.splice(0, numbers.length);

// Solution 4
// Not recommended because there is performance cost
// to continually calling this function
/* while(numbers.length > 0)
    numbers.pop();

console.log(numbers);
console.log(another); */

///////////// Combining and Slicing Arrays /////////////

/* const first = [1, 2, 3];
const first = [{id: 1}];    // Reference type
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10;

const slice = combined.slice(2,4);
const slice2 = combined.slice(2);
const slice3 = combined.slice();       // Returns a copy of the OG array

console.log(combined);
console.log(slice);
console.log(slice2);
console.log(slice3); */


///////////// The Spread Operator /////////////

/* const first = [1, 2, 3];
const second = [4, 5, 6];
 */
//const combined = first.concat(second);
// Using spread operator
// When we spread an array, all its elements 
// are returned individually. So, basically
// here we are declaring a new array, and in that 
// array, we're adding the individual elements
// of the first and second arrays. 
//const combined = [...first, 'a',...second, 'b'];  

//const copy = combined.slice(); 
// Using spread
//const copy = [...combined];

///////////// Iterating an Array /////////////

//const numbers = [1, 2, 3];

// You cannot get indives with for-of, but you can 
// with for-in
/* for(let number of numbers)
    console.log(number); */

/* numbers.forEach(function(number) {
    console.log(number);
}); */

// Using arrow syntax
//numbers.forEach(number => console.log(number));

// This callback function can take a second parameter, index
//numbers.forEach((number, index) => console.log(index, number));

///////////// Joining Arrays /////////////

//const numbers = [1, 2, 3];

// Question mark in paramter list indicates 
// that the parameter is optional
/* const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts); */

// Useful for converting to URL
/* const combined = parts.join('-');
console.log(combined); */

///////////// Sorting Arrays /////////////

//const numbers = [2, 3, 1];

// Converts each element to a string and then
// sorts them
// Doesn't work as well with objects
/* numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers); */

/* const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javascript'},
];

courses.sort();
console.log(courses);

courses.sort(function(a,b) {
    // a < b => -1
    // a < b => 1
    // a ===b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(courses); */

///////////// Testing the Elements of an Array /////////////

//const numbers = [1, -1, 2, 3];

/* Newer Methods */
// method: every()
// Will call the callback function on every element 
// in this array. As soon as it finds an element that 
// does not meet the predicate, it will stop searching. 
/* const allPositive = numbers.every(function(value){
    return value >= 0;
});

console.log(allPositive); */

// method: some()
// As soon as it finds an element that meets the predicate,
// it will stop searching. 
/* const atLeastOnePositive = numbers.some(function(value){
    return value >= 0;
});

console.log(atLeastOnePositive); */

///////////// Filtering an Array /////////////

/* const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered); */

///////////// Mapping an Array /////////////

//const numbers = [1, -1, 2, 3];

// For chains you put each callback in it's own line
/* const items = numbers
.filter(n => n >= 0)
.map(n => ({value: n}))
.filter(obj => obj.value > 1)
.map(obj => obj.value); */

/* const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);
 */

// The curly braces in an arrow function represent
// a code block. So when the JS engine tries to parse
// the arrow function, it thinks here we are defining
// a code block as opposed to an object to return. 
// If you are returning an object, you need to put that object
// in parantheses. 
//const items = filtered.map(n => ({value: n}));
//console.log(items);

/* const html = '<ul>' + items.join(' ') + '</ul>';
console.log(html); */

///////////// Reducing an Array /////////////

const numbers = [1, -1, 2, 3];

/* let sum = 0;
for(let n of numbers)
    sum += n; */

    
    // This reduce method has 2 elements
    // The first is a callback method
    // The second is the initial value for the accumulator
    /* Steps w Initial Value */
    // a = 0, c = 1 => a = 1
    // a = 1, c = -1 => a = 0
    // a = 0, c = 2 => a = 2
    // a = 2, c = 3 => a = 5
/*     const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    
    console.log(sum); */

    /* Steps w/out Initial Value */
    // a = 1, c = -1 => a = 0;
    // a = 0, c = 2 => a = 2;
    // a = 2, c = 3 => a = 5;
    const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    
    console.log(sum);
