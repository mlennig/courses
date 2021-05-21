import React, { Component } from "react";
import Counter from "./counter";

// N.B.: The component that owns a piece of the state, should be the one
// modifying it.

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            // The key attribute is used internally by react
            // so we cannot access it in our counter component.
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
