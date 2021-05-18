/////////////// ES6 Classes: 11. Exercise ///////////////
/* Implement a Stack */
// push
// pop
// peek
// count
// LIFO

// Define a private property using a WeakMap
const _items = new WeakMap();
class Stack{
    constructor(){
        _items.set(this, []);

    }
    
    push(obj){
        _items.get(this).push(obj);
    }
    
    pop(){
        const items = _items.get(this);
        if(items.length === 0) throw new Error('The stack is empty.');

        
        peek();
        return items.pop();
    }
    
    peek(){
        const items = _items.get(this);
        if(items.length === 0) throw new Error('The stack is empty.');

        
        const lastElement = items[items.length - 1];
        console.log(lastElement);
        return lastElement;
    }

    // Count is a ready-only property that we should
    // not be able to set from the outside.
    // So, that's where we use a getter. 
    count(){
        return _items.get(this).length;
    }
}