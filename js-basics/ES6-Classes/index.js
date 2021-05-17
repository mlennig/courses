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

/* class Circle{
    constructor(radius){
        this.radius = radius;
    }

    ///// Instance Method /////
    // This method is available on an instance of a class
    draw(){

    }

    ///// Static Method /////
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

Math2.abs() */

/************** 4. The This Keyword **************/ 

/* // When we enable "strict mode", JS will be more sensitive
// and will do more error checking and turn silent errors 
// into exceptions. It will also change the behaviour of the 
// this keyword in functions. 
'use strict';

const Circle = function(){
    this.draw = function(){
        console.log(this);
    }
};

const c = new Circle();
// Method Call
// bc we're calling a method on an object
c.draw();

// Obtain a reference to the draw method:
const draw = c.draw;

// Function Call
// Will point to Window (global object)
// Strict Mode: Will be undefined
// to prevent us from accidentally
// modifying the global object.
draw(); */

/* // The body of our classes are always executed
// in the strict mode, regardless of whether
// we enable stric mode. 
class Circle{
    draw(){
        console.log(this);
    }
}
const c = new Circle();
const draw = c.draw;
draw(); */

/************** 5. Private Members Using Symbols **************/ 

/* class Circle{
    constructor(radius){
        // Public by default
        this.radius = radius;
    }
} */

/* ///// 1st Approach /////
///// Not Recommended /////
///// Doesn't work, just a convention /////
class Circle{
    constructor(radius){
        // Public by default
        this._radius = radius;
    }
} */

/* ///// 2nd Approach /////
// New primitive: symbol
// Unique identifier
// Not a constructor, cannot 'new up'
const _radius = Symbol();  
const _draw = Symbol(); 

class Circle{
    constructor(radius){
        //this.radius = radius;
        //this.['radius'] = radius;
        // Private property
        this[_radius] = radius;
    }

    // Private Method
    [_draw](){

    }
}

const c = new Circle(1);
// We don't have any regular properties in this object
console.log(Object.getOwnPropertyNames(c)); 
// 'Hack' to see the private properties
console.log(Object.getOwnPropertySymbols(c));
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
 */

/************** 6. Private Members Using WeakMaps **************/ 

// A WeakMap is essentially a dictionary where
// keys are objects and values can be anything.
// Called WeakMaps bc the keys are weak.
// If there are no references to these keys, 
// they will be garbage-collected.
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);

        // In the code below, this will point to the global
        // object
        _move.set(this, function(){
            console.log('move', this);
        });

        // This will fix the previous issue because
        // arrow functions use the this value of their
        // containing function.
        // Therefore this will not be rebound, it will
        // be inherited from what we have in this
        // constructor.
        _move.set(this, () => {
            console.log('move', this);
        });
    }

    draw(){
        // This will return the value of the radius property
        //console.log(_radius.get(this));

        _move.get(this)();

        console.log('draw');
    }
}

const c = new Circle(1);

/************** 7. Getters and Setters **************/ 
/************** 8. Inheritance **************/ 
/************** 9. Method Overriding **************/ 
