import { Person } from "./person";

// Named export
export function promote(){}

// Default export
// Adding the default keyword indicates that this Teacher class
// is the main or default thing we're exporting from teacher.js.
export default class Teacher extends Person{
    constructor(name, degree){
      super(name);
      this.degree = degree;
    }
  
    teach(){
      console.log("teach");
    }
  }

