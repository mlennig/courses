/////////////// Prototypical Inheritance: 12. Exercise - Polymorphism ///////////////
/* Instructions */
// Continuation from last exercise
// Extend HtmlSelectElement and implement a render method.


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

    this.render = function(){
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}    // If we don't use an empty string it'll default to a comma
        </select>`;
    }
}

function HtmlImageElement(src){
    this.src = src;

    this.render = function(){
        // Using a template string.
        // So, instead of using a single or double quote,
        // we're using the backtick character. This is
        // part of ES6, and it allows us to pass arguments 
        // to this string. Whatever we put inside the curly 
        // braces will be dynamically placed into this string
        // at run time. 
        // To use these ES6 template strings: ${}
        return '<img src="${this.src}" />'
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


const e = new HtmlElement();
const s = new HtmlSelectElement([1,2,3]);

