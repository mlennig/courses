/** Notes on Objects **/

//////////////////////////// 1. Basics ////////////////////////////
// Object-oriented Programming (OOP)
// Group related variables
/* const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){           // Method
        console.log('draw');
    }
}; */



//////////////////////////// 2. Factory Functions ////////////////////////////
// Another way to creat objects. 
// Naming convention: Camel Case/Notation
function createCircle(radius){
    return {
        radius,                     // When key = value, you can write it w/out the key
        draw(){
            //console.log('draw');    // Objects can be rewritten like this inside objects
        }
    };
}
/* const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

const myCircle = createCircle(1); */

//////////////////////////// 3. Constructor Functions ////////////////////////////
// Naming convention: Pascal Case/Notation
/* This */
// 1. The operator first creates an empty object;
// 2. Then it will set this to poing to this object;
// 3. Finally it will return that object from this function.
function Circle(radius){
    this.radius = radius;       // This referenes an empty object
    this.draw = function(){
        console.log('draw');
    }
    //return this;                // This happens "under the hood"
}

//const circle = new Circle(1);   // Creates empty JS object, similar to cpp

//////////////////////////// 4. Dynamic Nature of Objects ////////////////////////////
// In using const, we cannot reset circle toa  new object
/* const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function(){}

delete circle.color;
delete circle.draw;  */

//////////////////////////// 5. Constructor Property ////////////////////////////
/* const circle3 = createCircle(1);
const another = new Circle(1); */

//let x = {};

// let x = new Object();

new String();   // '', "", '' <-- literals
new Boolean();  // We use true, false
new Number();   // 1, 2, 3, ...

//////////////////////////// 6. Functions are Objects ////////////////////////////
/* const Circle1 = new Function('radius', `
this.radius = radius;       
this.draw = function(){
    console.log('draw');
}`); */

//const circle = new Circle1(1);

Circle.call({}, 1);             // Must supply an empty object as 
                                // first arg, specifies target of 'this'
Circle.apply({}, [1, 2, 3]);    // Instead of passing all the arguments explicitly,
                                // we pass them in an array. 



// If you don't use the new operator, this by default 
// will point to the global object, which is window. 
// So if I want to rewrite this expression in this way
// instead of pass an empty objevct, I would pass window. 
//const another = new Circle(1);

//////////////////////////// 7. Value vs Reference Types ////////////////////////////
/* Value Types */
// Primitives
// Number, String, Boolean, Symbol, undefined, null
/*** Primitives are copied by their value ***/
/*** Objects are copied by their reference ***/

/* Reference Types */
// Object, Function, Array

let x = {value: 10};
let y = x;

x.value = 20;

let obj = {value: 10};

// Number is being passed by value as opposed to by reference 
// when you don't pass in the object.
// In passing an object, you're now passing by reference
function increase(number){
    obj.value++;
}

increase(obj);
console.log(obj);

//////////////////////////// 8. Enumerating Properties of an Object ////////////////////////////
/* const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
}; */

/* for(let key in circle)
    console.log(key, circle[key]); */

/* for(let key of circle)              // Can only be used with iterables
                                    // an object is not iterable
    console.log(key); */

// Object.keys(circle)) returns a string array
// which means we can use the for-of loop
// Object is a built-in constructor object
/* for(let key of Object.keys(circle))
    console.log(key);

//const x = {value:1}; // Object literal syntax

// Object.entries(circle) returns each value pair as an array
for(let entry of Object.entries(circle))
    console.log(entry);

// To see if a given property or method exists in an object
if('radius' in circle) console.log('yes');
if('color' in circle) console.log('yes'); */

//////////////////////////// 9. Cloning an Object ////////////////////////////
const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

/* const another = {};
for(let key in circle){
    another[key] = circle[key];
} */

// Copies everything in circle to {}
// Object {} doesn't have to be empty
// Can also be used to combine multiple objects
/* const another = Object.assign({
    color: 'yellow'
}, circle); */

// Takes all the properties and methods in this object
// and puts them in between the curly braces {}
/* const another = {...circle};

console.log(another); */


//////////////////////////// 10. Garbage Collection ////////////////////////////
// JS has a garbage collector, so we don't have to worry about this
/* let circle = {};
console.log(circle); */

//////////////////////////// 11. Math ////////////////////////////
// Bookmarked the mozilla JS math page


//////////////////////////// 12. String ////////////////////////////
// String primitive
//const message = 'this is my first message';
// When you use the dot operator, JS wraps the primitive
// in a string object
// String - JavaScript | MDN

// String object
//const another = new String('hi');

//////////////////////////// 13. Template Literals ////////////////////////////
// String primitive
/* const message = 
'This is my\n' +
'\'first\' message';

console.log(message); */

// Object {}
// Boolean literals true, false
// String literals '', ""
// Template ``
// Because we are using ``, we can edit it the way we want it
// to look 
/* const another = 
`Hi John,

Thank you for joining my mailing list,. 

Regards,
Mosh`; */
const name = 'John';

// In the {} you can put mathematical expressions, variables
// and functions
const another = 
`Hi ${name} ${2 + 3},

Thank you for joining my mailing list,. 

Regards,
Mosh`;

console.log(another);

//////////////////////////// 14. Date ////////////////////////////
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);

