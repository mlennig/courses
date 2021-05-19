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

const person = {
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
walk();

/******************* 6. Arrow functions *******************/
/******************* 7. Arrow Functions and this *******************/
/******************* 8. Array.map Mehod *******************/
/******************* 9. Object Destructuring *******************/
/******************* 10. Spread Operator *******************/
/******************* 11. Classes *******************/
/******************* 12. Inheritance *******************/
/******************* 13. Modules *******************/
/******************* 14. Named and Default Exports *******************/