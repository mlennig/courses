// Use camelcase for components
import React, { Component } from "react";

class Counter extends Component {
  // State is a special property in React components.
  // It's an object that includes any data that this
  // component needs.
  state = {
    count: 0,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      // To eliminate the extra div, we can add React.Fragment
      // Within the curly braces here we can put any valid
      // JS expression. An expression is something that produces a value.
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
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
