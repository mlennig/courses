/************** 2. CommonJS Modules **************/
/* // Everything in a module is considered to be private, 
// so it won't be accessible from the outside, unless
// we explicitly export it. 

// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }

    draw(){
        console.log('Circle with radius' + _radius.get(this));
    }
}

// To export modules
// Common JS Format
// module.exports is an object that you can add properties to
// The code below is an object with 2 properties: Circle & Square
//module.exports.Square = Square;
//module.exports.Circle = Circle;

// We're exporting a single object so we can simplify this code 
// like this:
// Now instead of adding a Circle property to the object, 
// we can just reset this object to Cicle. So when we import
// the circle module, we'll get the Circle class. 
module.exports = Circle; */

/************** 3. ES6 Modules **************/ 

// Implementation Detail
const _radius = new WeakMap();

// Public Interface
export class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }

    draw(){
        console.log('Circle with radius' + _radius.get(this));
    }
}