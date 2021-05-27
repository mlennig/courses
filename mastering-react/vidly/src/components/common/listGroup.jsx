import React, { Component } from "react";
//import _ from "lodash";
import propTypes from "prop-types";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

ListGroup.propTypes = {
  items: propTypes.array.isRequired,
  textProperty: propTypes.string,
  valueProperty: propTypes.string,
  onItemSelect: propTypes.func.isRequired,
};

export default ListGroup;
