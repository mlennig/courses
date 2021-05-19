///////////////////// ES6 Refresher /////////////////////
/******************* 1. Introduction *******************/

/******************* 2. Let vs Var vs Const *******************/

// var -> function-scoped // throw this away
// let -> block-scoped
// const -> block-scoped

/* function sayHello(){
  // When you declare a variable with the var keyword,
  // that variable is accessible inside the function
  // in which it's defined. 
  for(var i = 0; i < 5; i++){
    console.log(i);
  }
}

sayHello();
 */

/******************* 3. Objects *******************/

/* const person = {
  name: 'Mosh',
  // Old way to define function
  //walk: function(){},
  // ES6 way to define function
  walk(){},
  talk(){}
};

// Dot notation
person.talk();

// Bracket notation
// Used ahead of time when we don't know what property
// or method we're going to access.
const targetMember = 'name';
person[targetMember.value] = 'John'; */

/******************* 4. The this Keyword *******************/

/* const person = {
  name: 'Mosh',
  walk(){
    console.log(this);
  },
};

person.walk();

// Here we're not calling the walk function, we're just
// getting a reference to the function.
// This now makes walk a function.
const walk = person.walk;
//console.log(walk);

// If we call a function as a method in an object, this will
// always return a reference to that object.
// However, if you call a function as a stand alone object, 
// or outside of an object, this will return a reference
// to the global object.
walk(); */

/******************* 5. Binding this *******************/

/* const person = {
  name: 'Mosh',
  walk(){
    console.log(this);
  },
};

person.walk();

// We can use .bind to bind a function to an object. 
// In the case below, the bind method will return a 
// new instance of this walk function and set this
// to point to this person object. 
const walk = person.walk.bind(person);
walk(); */

/******************* 6. Arrow functions *******************/

/* // Old way
const square = function(number){
  return number * number;
}; */

/* // ES6 
const square = number => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 1, isActive: true },
  { id: 1, isActive: false },
];

// Old way
const activeJobs = jobs.filter(function(job){return job.isActive;});
// ES6
const activeJobs = jobs.filter(job => job.isActive); */


/******************* 7. Arrow Functions and this *******************/

// Arrow functions don't rebind 'this'

/* const person = {
  talk(){
    // setTimeout will execute the given function after the given
    // delay.
    // this will return the window object because the callback 
    // function is not part of any objects. It is a stand-alone
    // function. 
    setTimeout(function(){
      console.log('this', this);
    }, 1000);
  }
}; */

// To fix:
// Old Way //
/* const person = {
  talk(){
    var self = this;
    setTimeout(function(){
      console.log('self', self);
    }, 1000);
  }
}; */

// ES6
/* const person = {
  talk(){
    setTimeout(() => {
      // If we change this to an arrow function, because arrow functions
      // don't rebind 'this', the callback function will inherit the 'this'
      // keyword.
      console.log('this', this);
    }, 1000);
  }
};

person.talk(); */

/******************* 8. Array.map Mehod *******************/

/* const colors = ['red', 'green', 'blue'];


//const items = colors.map(color => '<li>' + color + '</li>');
// Or using template literals
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
 */
/******************* 9. Object Destructuring *******************/

/* const address = {
  street: '',
  city: '',
  country: '',
}; */

// Old way
/* const street = address.street;
const city = address.city;
const country = address.country; */

/* // ES6
const { street, city, country } = address;
// With the code below we're defining a new constant 
// called st and setting that to the street property
// of the address object. 
const { street:st } = address;
 */

/******************* 10. Spread Operator *******************/

/* const first = [1, 2, 3];
const second = [4, 5, 6];

// Old Way
//const combined = first.concat(second);

// ES6
//const combined = [...first, ...second];
// can also add elements this way
//const combined = [...first, 'a',...second, 'b'];

// Spread operator can also be used to clone an array
const clone = [...first];
console.log(first);
console.log(clone); */

/* // Can also apply the spread operator to objects
const first = { name: 'Mosh' };
const second = { job: 'Instructor' };
// Can be used to combine objects
const combined = {...first, ...second, location: 'Australia'};
console.log(combined);
// Can be used to clone objects
const clone = {...first}; */

/******************* 11. Classes *******************/

/* // Old way
const person = {
  name: "Mosh",
  walk(){
    console.log("walk");
  }
};

// Here we're duplicating the method, too much unnecessary code
const person2 = {
  name: "Mosh",
  walk(){
    console.log("walk");
  }
}; */

/* // ES6 Classes
// Now this can serve as a blueprint for creating person objects
class Person {
  constructor(name){
    this.name = name;
  }

  walk(){
    console.log("walk");
  }
}

// To create an object from a Class, we need to new up
const person = new Person('Mosh'); */

/******************* 12. Inheritance *******************/

/* // ES6 Classes
class Person {
  constructor(name){
    this.name = name;
  }

  walk(){
    console.log("walk");
  }
}

const person = new Person('Mosh');

class Teacher extends Person{
  constructor(name, degree){
    super(name);
    this.degree = degree;
  }

  teach(){
    console.log("teach");
  }
}

const teacher = new Teacher('Mosh', 'MSc'); */

/******************* 13. Modules *******************/

/* import { Person } from './person';
import { Teacher } from './teacher';

const teacher = new Teacher('Mosh', 'MSc');
teacher.teach();
 */
/******************* 14. Named and Default Exports *******************/

// Typically we use default exports when there is only one object
// we want to export. 

// Default -> import ... from '';
// Named -> import { ... } from  '';


// Remove curly braces
import  Teacher, {promote}  from './teacher';


const teacher = new Teacher('Mosh', 'MSc');
teacher.teach();