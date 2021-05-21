import React, { Component } from "react";
import Counter from "./counter";

// N.B.: The component that owns a piece of the state, should be the one
// modifying it.

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            // The key attribute is used internally by react
            // so we cannot access it in our counter component.
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
