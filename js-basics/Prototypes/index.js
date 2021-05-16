/////////////// Prototypes: Exercise ///////////////

/************** 1. Inheritance **************/
// Base/Super/Parent class 
// Derived/Sub/Child
// Inheritance Relationship described as: IS-A 
// Classical vs Prototypical Inhertance

/************** 2. Prototypes and Prototypical Inheritance **************/
// How can we implement inheritance only using objects?
// Base/Super/Parent = Prototype
// To find prototype:
// Object.getPrototypeOf()

/************** 3. Multilevel Inheritance **************/

/* // Every time we call the circle constructor to create
// a new circle object, this constructor will create 
// a new object and set its prototype property to
// circleBase. 
// In other words, objects created by a given constructor
// will have the same prototype.
function Circle(radius){
    this.raidus = radius;

    this.draw = function(){
        console.log('draw');
    };
}

const circle = new Circle(10);
 */
/************** 4. Property Descriptors **************/

/* let person = { name: 'Mosh' }
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// configurable: true, means we can delete this member if we want to.
// enumerable: false, which is why when we iterated over our person object
// we couldn't see the toString method.
// writable: true, we can set its value.
// value: f toString(), this is where we have the default implementation 
// of the toString() method.
// These are attritubes you can set for your objects.
console.log(descriptor);

console.log(person);

for(let key in person){
    // None of the properties and methods defined in prototype class
    // 'Object' are visible here.
    console.log(key);
}

// Same here
console.log(Object.keys(person));

// In JS, our properties have attributes attached to them. 
// Sometimes these attributes prevent a property from 
// being enumerated.  */

/* let person = { name: 'Mosh' }
Object.defineProperty(person, 'name', {
    // By default, all of these attributes are true 
    writeable: false,
    enumerable: false,
    configureable: false
}); */

/************** 5. Constructor Prototypes **************/

/* // myObj.__proto__ (parent of myObj)
// Constructor.prototype() = parent of myObj
Object.getPrototypeOf(myObj);

// Constructors also have a prototype property
function Circle(radius){
    this.radius = radius;
}

// This is the object that will be used as the parent
// for objects created by the circle constructor.
Circle.prototype

const circle = new Circle(1); */

/************** 6. Prototype vs Instance Members **************/

/* // Constructors also have a prototype property
function Circle(radius){
    // Instance members
    this.radius = radius;

    // In an instance method we can access a prototype member
    this.move = function(){
        this.draw();
        console.log('move');
    }    
}

// If you want a large # of instances it's a waste of space 
// to hold on to a bunch of copies of the method,
// so move the method to circleBase

// Prototype members
Circle.prototype.draw = function(){
    // Can still call an instance method on the circle class.
    //this.move();
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// We can overwrite the implementation of c1.toString() method
// in the prototype of our circle objects:
Circle.prototype.toString = function(){
    return 'Circle with radius ' + this.radius;
} */

/************** 7. Iterating Instance and Prototype Members **************/

// Constructors also have a prototype property
function Circle(radius){
    // Instance members
    this.radius = radius;

    this.move = function(){
        console.log('move');
    }    
}

// Prototype members
// It doesn't matter when you modify the prototype
// before or after creation of an object
Circle.prototype.draw = function(){
    console.log('draw');
}

const c1 = new Circle(1);

// Object.keys only returns instance members
// draw is a prototype member
console.log(Object.keys(c1));

// for-in loop returns all members (instance + prototype)
// aka own properties + prototype properties
for(let key in c1)console.log(key);

/************** 8. Avoid Extending the Built-in Objects **************/
// Don't modify objects you don't own

