/////////////// Prototypical Inheritance: Notes ///////////////

/************** 1. Creating Your Own Prototypical Inheritance **************/

/* function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1); */

/************** 2. Resetting the Constructor **************/

/* function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius){
    this.radius = radius;
}

// In doing this we can no longer create circle objects
// based on this constructor in the dynamic fashion.
// Best Practice: Whenever you reset the prototype of an object,
// you should also reset the constructor.
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape();

// new Circle.prototype.constructor(1) = 
const c = new Circle(1); */


/************** 3. Calling the Super Constructor **************/

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius, color){
    // To call the Super Constructor:
    Shape.call(this, color);

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);

/************** 4. Intermediate Function Inheritance **************/
/************** 5. Method Overriding **************/
/************** 6. Polymorphism **************/
/************** 7. When to Use Inheritance **************/
/************** 8. Mixins **************/

