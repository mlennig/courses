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

/* function Shape(color){
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
const c = new Circle(1); */

/************** 4. Intermediate Function Inheritance **************/

/* function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

// Intermediate function inheritance
function extend(Child, Parent){
    Child.prototype = Object.create(Parents.prototype)
    Child.prototype.constructor = Child;
}

function Circle(radius, color){
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function(){
    console.log('draw');
}

extend(Square, Shape);

function Square(size){
    this.size = size;
}

const s = new Shape();
const c = new Circle(1, 'red'); */

/************** 5. Method Overriding **************/


// Intermediate function inheritance
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(){
}

extend(Circle, Shape);

// Must put this after extending this circle, because
// at this point, we are resetting the prototype.
// If we define this before resetting the prototype,
// then this implementation is going to disappear. 
Circle.prototype.duplicate = function(){
    // Let's say we want to call the duplicate method on 
    // the parent or the shape object.
    // If we're using thi sin this implementation, then
    // we need to use the call method to set the context
    // for this.
    Shape.prototype.duplicate.call(this);

    console.log('duplicate circle');
}

const c = new Circle();

/************** 6. Polymorphism **************/
/************** 7. When to Use Inheritance **************/
/************** 8. Mixins **************/

