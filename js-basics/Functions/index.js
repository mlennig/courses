//////////////////// Functions: Notes ////////////////////
/* Instructions for reader: Highlight entire section, CMD+Option+A to uncomment */

/******************  1. Function Declarations vs Expressions ******************/

/* // Function Declaration
function walk(){
    console.log('walk');
}

// Function Expression
// Note the semicolon
let run2 = function walk(){
    console.log('run');
};

// Anonymous Function expression
let run = function(){
    console.log('run');
};

// Now both move & run are referencing the same
// anonymous function.
let move = run;

run();
move(); */

/******************  2. Hoisting ******************/

/* // Function Declaration
// Can call a function before it's initialized.
// The reason for this is because when our JS engine exucutes 
// this code, it moves all the function declarations to the
// top. This is called hoisting. 
walk();

function walk(){
    console.log('walk');
}

// Anonymous Function expression
// Cannot call function before it's initialized.
// This is exactly like using a variable or a constant before it's defined.
const run = function(){
    console.log('run');
}; */

/******************  3. Arguments ******************/

/* // JS is dynamic. 
let x = 1;
x = 'a';

function sum(a, b){    
    // We can see indices of the arguments passed to this function
    // Length property returns the number of arguments that are passed
    // Callee returns the currently executing function 
    console.log(arguments);
    return a + b;
}

// Make # of arguments that the function accepts variable
function sum2(){
    let total = 0;
    // This for loop can be used on any object that has an iterator
    for(let value of arguments)
        total += value;
    return total;
}

// No matter how many arguments you add, only the first 
// 2 (or however many paramters) will be used if it was 
// defined to only take 2 arguments. 
console.log(sum2(1,2)); */

/******************  4. The Rest Operator ******************/

/* // Define a function with variable number of parameters
// using 'rest operator'. 
// Args will put all the arguments into an args array.
function sum(...args){
    return args.reduce((a,b) => a + b);
}

// Note: Cannot have a parameter after rest parameter
function sum2(discount,...prices){
    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}

console.log(sum2(0.1, 20, 30)); */

/******************  5. Default Parameters ******************/

/* function interest(principal, rate, years){

    return principal * rate / 100 * years;
}
console.log(interest(10000, 3.5, 5));


function interest2(principal, rate, years){
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest2(10000));

function interest3(principal, rate = 3.5, years = 5){
    // N.B.: When you give a parmater a default value,
    // you should also give all the other paramters
    // after that a default value. 
    // Best practice: Whenever you want to give 
    // a function paramters a default value,
    // make sure that that paramter is the last parameter
    // in the list, or give all the paramters in the list 
    // after that a default value.
    return principal * rate / 100 * years;
}

console.log(interest3(10000));
 */
/******************  6. Getters and Setters ******************/

/* const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    // Add 'get' in front and make it into a getter
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = [parts[1]];
    }
};

// 1st solution
console.log(`${person.firstName} ${person.lastName}`);

// 2nd solution
// Issues with this approach:
// 1. It is read only -- cannot set a person's full name
// from the outside. 
// 2. It is not nice to call it like a function. It would
// be nicer if we could treat this as a property and drop
// the parantheses.
//console.log(person.fullName());

// getters => access properties 
// setters => change (mutate) them

console.log(person.fullName);

person.fullName = 'John Smith';

// N.B. When logging things in the console you 
// may see properties with the '...' value. 
// This is a getter. To read the value, you need 
// to click. When you click on it, the getter is
// called and executed. 
console.log(person); */

/******************  7. Try and Catch ******************/

/* const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    // Add 'get' in front and make it into a getter
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        // 1st Solution
        if(typeof value !== 'string') return;
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = [parts[1]];
    }
};

person.fullName = 'John Smith';
console.log(person);

const person2 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    // Add 'get' in front and make it into a getter
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        if(typeof value !== 'string')
            // 2nd Solution
            // Error is a constructor function
            // When we throw an error, it's called an exception
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = [parts[1]];
    }
};

try{
    person2.fullName = '';
}
catch(e){
    alert(e);
}

console.log(person2); */

/******************  8. Local vs Global Scope ******************/

// Basic scope rules

/******************  9. Let vs Var ******************/

/* let x = 0;
var y = 0;

// i is accessible outside the code block
// When you define a variable with var, its
// scope is not limited to the scope in which 
// it is defined. It's limited to the function
// in which it's defined. 
// var => function-scoped 
// ES6 (ES2015): let, const => block-scoped
function start(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i);
}

start();

function start2(){
    for(var i = 0; i < 5; i++){
        if(true){
            var color = 'red';
        }
    }
    console.log(i);
    console.log(color);
}

start2();

// When we use var outside of a function, this creates
// a global variable and attaches this global variable
// to the window object in browser. 
// A window object is a complex object with lots of 
// properties and methods. Used for front-end applications.
// var attackes the variable to our window object. 
// This is bad because window object is something central, 
// there is only one instance of the window object. 
// If you're using a third party library and the library
// has another variable with the same name, that variable can
// overwrite your variable. 
var color = 'red';
let age = 30;

// When we define a function, this function is a global object
// attached to the window object. This is bad practice. 
function sayHi(){
    console.log('hi');
} */

/******************  10. The this Keyword ******************/

/* // this references the object that is executing the current function

// method -> obj
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.stop = function(){
    console.log(this);
}

video.play();

// function -> global (window, global)
function Video(title){
    // Set up like constructor function
    this.title = title;
    console.log(this);
}

// Creates a new empty object and sets this 
// in this constructor function to point to the empty
// object. 
// Recap: When dealing with a regular function
// this, by default, references the global object
// but if you call a function using the new operator,
// which is the case for constructor functions, this
// will references a new, empty object. 
const v = new Video('a');

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        // The second paramter of the forEach object is
        // thisArg, so we can pass an object here such that
        // this will reference that object.
        this.tags.forEach(function(tag){
            // Here we are inside a callback function, 
            // which is just a regular function. this 
            // will refer to the global object.
            console.log(this, tag);
        }, this);
    }
};

video2.showTags(); */

/******************  11. Changing this ******************/

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this, tag);
        }, this);
    }
};

video.showTags();

// 1st Solution
// Don't use this approach
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        // Some people call this that
        const self = this;                   // this references the video object here
        this.tags.forEach(function(tag){
            console.log(self.title, tag);    // here this would ref the global obj
        }, this);
    }
};

video2.showTags();

// 2nd Solution
function playVideo(){
    console.log(this);
}

// The first parameter is thisArg, where we can pass an object
// that this will them reference.
playVideo.call({ name: 'Mosh' }, 1, 2);

// For apply, additional arguments must be passed as an array
playVideo.apply({ name: 'Mosh' }, [1, 2]);

// The bind method does not call our playVideo function, 
// it returns a new function and sets this to point
// to this object permanently.
playVideo.bind({ name: 'Mosh' }) ();


// References the window object
playVideo();


const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){             
        this.tags.forEach(function(tag){
            console.log(this.title, tag);    
        }.bind(this));
    }
};

video3.showTags();

// Arrow functions inherit the this value
// from the containing function 
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){             
        this.tags.forEach(tag => {
            console.log(this.title, tag);    
        });
    }
};

video4.showTags();