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


// Factory Function
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
const another = new Circle(1);


/*************** 5. Constructor Property ***************/
/*************** 6. Functions are Objects ***************/
/*************** 7. Values vs Reference Types ***************/
/*************** 8. Adding or Removing Properties ***************/
/*************** 9. Enumerating Properties ***************/
/*************** 10. Abstraction ***************/
/*************** 11. Private Properties and Methods ***************/
/*************** 12. Getters and Setters ***************/
