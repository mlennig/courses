/////////////// ES6 Tooling: Notes ///////////////
/************** 1. Modules **************/ 
// Modules //
// AMD = Asynchronous Module Definition 
// Primarily used in browser applications
// CommonJS
// Used in Node.js
// UMD = Universal Module Definition
// Used both in the Browswer and in Node.js
// ES6 Modules 
// JS now natively supports a module format

/************** 2. CommonJS Modules **************/ 
/* // Notes on Modularity //
// Cohesion: Highly related things should go together

// Import the module
// CommonJS Format
// Pass a relative path to the target module
// No need to add extension 
const Circle = require('./circle');

const c = new Circle(10);
c.draw(); */

/************** 3. ES6 Modules **************/ 

/* // Add .js as a temporary workaround for this lecture
import {Circle} from './circle.js';

const c = new Circle(10);
c.draw(); */

/************** 4. ES6 Tooling **************/ 
//// for Browser Applications ////
// Transpiler //
// Translator + Compiler
// We give it our modern JS code and convert it into code all
// browsers can understand (ES5)
// e.g. Babel
// Bundler //
// Responsible for combining all our JS files into a single file, 
// which we call a bundle. 
// Most popular one is Webpack. It will:
// 1. Combine all JS codes into a single file
// 2. Minify our cody by getting rid of all the white spaces and comments
// 3. Uglify our code by shortening the name of our identifiers,
// like classes, functions, objects, etc. 


/************** 5. Babel **************/ 
//// NPM ////
// Used to install 3rd party libraries and tools 
// In a terminal, run 'npm init --yes', which creates a file in 
// our es6-tooling folder called package.json, which is an 
// identification for our application. 
// It includes properties like name, version, description, etc. 
// Babel-Cli //
// Babel's command line interface. It's the tool that we run from 
// the command line, like npm. We run it from the command line and
// give it the name of our JS file, and then it will convert or 
// compiule that JS code. 
// Babel-Core //
// The core of babel where all the logic for transpiring code is
// implemented. 
// Babel-Preset //
// In babel, we have a plugin for every new JS feature started from
// ES6. 

/************** 6. Webpack **************/

// Add .js as a temporary workaround for this lecture
import {Circle} from './src/circle.js';

const c = new Circle(10);
c.draw();

/************** 7. Cheat Sheet **************/ 
/************** 8. What to Learn Next **************/ 

