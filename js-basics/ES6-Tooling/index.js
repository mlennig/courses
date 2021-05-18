/////////////// ES6 Tooling: Notes ///////////////
/************** 1. Modules **************/ 
// Modules //
// AMD = Asynchronous Module Definition 
// Primarily used in browser applications
// CommonJS
// Used in Node.js
// UMD = Universal Module Definition
// Used both in the Browswer and in Node.js
// ES6 Modules 
// JS now natively supports a module format

const _radius = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }

    draw(){
        console.log('Circle with radius' + _radius.get(this));
    }
}

const c = new Circle(10);
c.draw();

/************** 2. CommonJS Modules **************/ 
/************** 3. ES6 Modules **************/ 
/************** 4. ES6 Tooling **************/ 
/************** 5. Babel **************/ 
/************** 6. Webpack **************/ 
/************** 7. Cheat Sheet **************/ 
/************** 8. What to Learn Next **************/ 

