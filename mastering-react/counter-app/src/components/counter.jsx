// Use camelcase for components
import React, { Component } from "react";

class Counter extends Component {
  // State is a special property in React components.
  // It's an object that includes any data that this
  // component needs.
  state = {
    count: 0,
  };

  render() {
    // jsx expression
    return (
      // To eliminate the extra div, we can add React.Fragment
      // Within the curly braces here we can put an valid
      // JS expression. An expression is something that produces a value.
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    // JSX expressions are just like normal objects.
    // You can return them from a function, you can pass
    // them to a function, you can also sue them as a
    // value of a constant or a variable.
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
