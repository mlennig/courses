/////////////// ES6 Classes: 12. Notes ///////////////
/************** 1. ES6 Classes **************/ 

/* function Circle(radius){
    this.radius = radius;

    this.draw = function (){
        console.log('draw');
    }
} */

/* // Rewrite above using ES6 Classes
class Circle{
    // Methods are defined in the body of this class
    constructor(radius){
        // Methods are defined here to avoid ending up
        // on the prototype of the Circle Object.
        this.radius = radius;
        this.move = function(){

        }
    }

    // Methods defined here will end up on the prototype 
    // of the Circle object. 
    draw(){
        console.log('draw');
    }
}

const c = new Circle(1);

// Checkout babeljs.io */

/************** 2. Hoisting **************/ 

/* // Function Declaration
// Are hoisted, meaning they are raised to the top
// of the code.
function sayHello(){}

// Function Expression
// N.B. Add semicolon at the end
// Are NOT hoisted. 
const sayGoodbye = function(){}; */

// Classes can also be defined using declarations 
// or expressions.
// However, neither are hoisted.
// Use Class Declaration syntax.

/* // Class Declaration
class Circle{
}

// Class expressiohns
const Square = class{
}; */
 
/************** 3. Static methods **************/ 

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    /* Instance Method */
    // This method is available on an instance of a class
    draw(){

    }

    /* Static Method */
    // Static methods are available on the class itself.
    // We often use the to create utility functions
    // that are not specific to a given object.
    // Here we are not working with a particular Circle object, 
    // we are working with the class itself. 
    // Therefore, to call static methods you don't have to create
    // an instance of the class.
    // e.g. Math
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
    
}

//const circle = new Circle(1);
const circle = Circle.parse('{"radius": 1}');
console.log(circle); 

// e.g. of static methods
class Math2{
    static abs(value){

    }
}

Math2.abs()

/************** 4. The This Keyword **************/ 
/************** 5. Private Members Using Symbols **************/ 
/************** 6. Private Members Using WeakMaps **************/ 
/************** 7. Getters and Setters **************/ 
/************** 8. Inheritance **************/ 
/************** 9. Method Overriding **************/ 
