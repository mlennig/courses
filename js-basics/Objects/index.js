/** Notes on Objects **/

//////////////////////////// Basics ////////////////////////////
// Object-oriented Programming (OOP)
// Group related variables
/* const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){           // Method
        console.log('draw');
    }
}; */



//////////////////////////// Factory Functions ////////////////////////////
// Another way to creat objects. 
// Naming convention: Camel Case/Notation
function createCircle(radius){
    return {
        radius,                     // When key = value, you can write it w/out the key
        draw(){
            console.log('draw');    // Objects can be rewritten like this inside objects
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

const myCircle = createCircle(1);

//////////////////////////// Constructor Functions ////////////////////////////
// Naming convention: Pascal Case/Notation
/* This */
// 1. The operator first creates an empty object;
// 2. Then it will set this to poing to this object;
// 3. Finally it will return that object from this function.
function Circle(radius){
    this.radius = radius;       // This referenes an empty object
    this.draw = function(){
        console.log('draw');
    }
    //return this;                // This happens "under the hood"
}

//const circle = new Circle(1);   // Creates empty JS object, similar to cpp

//////////////////////////// Dynamic Nature of Objects ////////////////////////////
// In using const, we cannot reset circle toa  new object
const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function(){}

delete circle.color;
delete circle.draw; 

//////////////////////////// Constructor Property ////////////////////////////
const circle = createCircle(1);
const another = new Circle(1);

let x = {};

// let x = new Object();

new String();   // '', "", '' <-- literals
new Boolean();  // We use true, false
new Number();   // 1, 2, 3, ...

//////////////////////////// Functions are Objects ////////////////////////////
//////////////////////////// Value vs Reference Types ////////////////////////////
//////////////////////////// Enumerating Properties of an Object ////////////////////////////
//////////////////////////// Cloning an Object ////////////////////////////
//////////////////////////// Garbage Collection ////////////////////////////
//////////////////////////// Math ////////////////////////////
//////////////////////////// String ////////////////////////////
//////////////////////////// Template Literals ////////////////////////////
//////////////////////////// Date ////////////////////////////