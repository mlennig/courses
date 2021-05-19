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

const person = {
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
person[targetMember.value] = 'John';

/******************* 4. The this Keyword *******************/
/******************* 5. Binding this *******************/
/******************* 6. Arrow functions *******************/
/******************* 7. Arrow Functions and this *******************/
/******************* 8. Array.map Mehod *******************/
/******************* 9. Object Destructuring *******************/
/******************* 10. Spread Operator *******************/
/******************* 11. Classes *******************/
/******************* 12. Inheritance *******************/
/******************* 13. Modules *******************/
/******************* 14. Named and Default Exports *******************/