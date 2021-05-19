// Import Objects from React modules
import React from 'react';
import ReactDOM from 'react-dom';

// Babel will compile this down to a call to 
// React.createElement, which is why we have to
// import React even though we're not dealing 
// with those objects in our code. 

// In a real-world application, instead of 
// rendering a simple element in the DOM, we'll
// render our app component. This app component
// is the root component of our application and 
// includeds children like navigation bar, 
// sidebar, profile, etc. So we'll have a tree of 
// components which will eventually produce a complex 
// markup.
const element = <h1>Hello World</h1>;
//console.log(element);
ReactDOM.render(element, document.getElementById('root'));