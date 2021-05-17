/////////////// Prototypical Inheritance: 10. Exercise - Prototypical Inheritance ///////////////
/* Instructions */
// Design 2 objects
// 1. HtmlElement = parent
// Own method: click
// Prototype method: focus
// 2. HtmlSelectElement // Represents a drop-down list = child
// Can pass an array, but if no arg passed, initializes and empty array
// called items
// 2 methods
// addItem: adds input to array
// removeItem: remove input from array
// We have prototypical inheritance


/* Parent Object */
function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focused');
}

/* Child Object */
function HtmlSelectElement(items = []){
    this.items = items,

    this.addItem = function(item){
        this.items.push(item);
    }

    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item), 1);
    }
}

// Prototypical Inheritance
// The code below will not work in the current implementation.
// Here, object.create will create a new object and set the
// prototype of that object to the prototype of HtmlElement.
// Let HtmlElement.prototype = baseHtmlElement.
// This has the focus method.
// Let HtmlSelectElement.prototype = baseHtmlSelectElement 
// baseHtmlSelectElement is an empty object linked to 
// baseHtmlElement as its prototype. 
// Consequently, we are not inheriting the click function.
//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

// To fix the above and include the click element:
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


const e = new HtmlElement();
const s = new HtmlSelectElement([1,2,3]);