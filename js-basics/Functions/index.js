//////////////////// Functions: Notes ////////////////////
/* Instructions for reader: Highlight entire section, CMD+Shift+A to uncomment */

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
/******************  5. Default Parameters ******************/
/******************  6. Getters and Setters ******************/
/******************  7. Try and Catch ******************/
/******************  8. Local vs Global Scope ******************/
/******************  9. Let vs Var ******************/
/******************  10. The this Keyword ******************/
/******************  11. Changing this ******************/