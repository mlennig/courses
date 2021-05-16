/** Notes II on Objects **/

/*************** 0. Four Pillars of OOP ***************/
/* The best functions are those with no parameters */
// Encapsulation: Group related variables and functions together, reduce complexity, increase reusability
// Abstraction: Reduce the impact of change, reduce complexity
// Inheritance: Eliminate redundant code
// Polymorphism: Allows you to eliminate long if/else switch/case statements

/*************** 1. Introduction ***************/
// Creating Objects
// Factories and Constructors
// Primitives and Reference Types
// Working with Properties 
// Private Properties
// Getters/Setters

/*************** 2. Object Literals ***************/
// es5 & before: var
// best practice, stop using var. use let or const.

// Object literal syntax
// In this implementation, to create another circle,
// we would have to duplicated all the code.
// It is not a good way to declare objects and duplicate it
// if the object has at least one method. 
// The solution is to use a Factory or
// constructor function.

// If an object >= 1 methods, we say that object has 
// behavior.
/* const circle = {
    radius: 1,
    location:{
        x: 1,
        y: 1
    },
    draw:function(){
        console.log('draw');
    }
};

circle.draw(); */

/*************** 3. Factories ***************/

/* // Factory Function
function createCircle(radius){
    return {
        radius,
        draw:function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw(); */

/*************** 4. Constructors ***************/
// N.B.:
// If we return an object in the function, we refer to
// that function as a factor function.
////
// In contrast, if we use the this keyword along
// with the new operator, we refer to that function
// as a constructor function. 


/* // Factory Function
function createCircle(radius){
    return {
        radius,
        draw:function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius){
    // By default, this points the the global object,
    // which would would be window. 
    // Inside a node object, the global object is global.
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// new
// 1. Creates an empty object,
// 2. Then it will set this to point to that object,
// 3. Finally, it will return that object from the Circle function.
const another = new Circle(1); */


/*************** 5. Constructor Property ***************/
// Every object in JS has a function called constructor
// When we create an object using object literal syntax,
// internally the JS engine uses this constructor 
// function.

/* // let x = new Object();
let x = {};

new String();       // But usually we use '', "", ``
new Boolean();      // true, false
new Numnber()       // 1, 2, 3, ... */

/*************** 6. Functions are Objects ***************/

/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
} */

// Circle.
// Purple are methods
// Blue are properties

/* const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function(){
    console.log('draw');
}
`);

const circle = new Circle1(1);
 */

/* // this will reference the object here {}
Circle.call({}, 1);
// Same as call but you need to pass arguments as array
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1); */

/*************** 7. Values vs Reference Types ***************/

// Value Types aka Primitives
// Number
// String
// Boolean
// Symbol
// undefined
// null

/* // Object not stored in variable
// address of object stored in variable.
let x = { value:10 };   
let y = x;

x.value = 20;

let number = 10;
// Value of primitive is copied
function increase(number){
    number++;
}

// Reference Types - Objects
// Object
// Function
// Array

let obj = { value: 10 };
// Value of primitive is copied
function increase(obj){
    obj.value++;
}

increase(number);
console.log(number);

increase(obj);
console.log(obj); */

/*************** 8. Adding or Removing Properties ***************/

/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// Objects are dynamic
const circle = new Circle(10);

// Dot notation
circle.location = { x: 1 };

// Bracket notation
circle['location'] = { x: 1 };

// or,
// If you have special characters or a space, use bracket
// notation
const propertyName = 'center location';
circle[propertyName] = { x: 1 };

// Deleting properties
// Dot notation
delete circle.location;
// Bracket notation
delete circle['location'];
 */
/*************** 9. Enumerating Properties ***************/

/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

for(let key in circle){
    console.log(key, circle[key]);
}

// If you want only the properties and not the methods
for(let key in circle){
    if(typeof circle[key] !== 'function'){
        console.log(key, circle[key]);
    }
}

// Returns all the keys in a circle as an array
const keys = Object.keys(circle);
console.log(keys);

// To check if an object has a specific property
if('radius' in circle)
console.log('Circle has a radius.'); */

/*************** 10. Abstraction ***************/

/* function Circle(radius){
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    this.computeOptimumLocation = function(factor){
        // ...
    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    }
}

const circle = new Circle(10); */

/*************** 11. Private Properties and Methods ***************/
// A closure determines what variables will be accessible to
// an inner function.

/* function Circle(radius){
    this.radius = radius;

    // Setting this as a local variable makes it private. 
    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function(factor){
        // ...
    }

    // This function will have access to the local variables 
    // defined inside of the function, as well as variables
    // defined in its parent function. 
    // Scope is temporary, closure remains.
    // The two variables defined above are part of the closure
    // of this function. 
    this.draw = function(){
        computeOptimumLocation(0.1);
        

        console.log('draw');
    };
}

const circle = new Circle(10); */

/*************** 12. Getters and Setters ***************/

function Circle(radius){
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    this.draw = function(){
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        // get is a special keyword in JS
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y){
                throw new Error('Invalid Location');
            }
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.draw();