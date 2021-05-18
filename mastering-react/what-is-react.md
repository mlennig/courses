### What is React
A JS library for building user interfaces. React reacts to state changes and updates the DOM.

 - **Components:** A component is a piece of the UI. So when building applications with React, we build a bunch of independent, isolated, and reusable components, and then compose them to build complex user interfaces. 
 
 - Every React application has at least one component, which we refer to as the **root component**. This component represents the entire application and contains other child components. Therefore, every React application is essentially a tree of components. 
 E.g.: 
* App
	- NavBar
	- Profile
	- Trends
	- Feed 
		- Tweet 
			- Like

Each component is a piece of UI. They can be built an isolation and then put together to build complex UIs. 

**Implementation:** 
A component is typically implemented as a JS class that has some state and a render method.  The state here is the datat we want to display when the component is rendered. 
```bash
class Tweet{
	state = {};
	render(){	// --> React Element
	}
}
```
The **render** method is responsible for describing what the UI should look like. The output of this render method is a react element, which is a simple, plain, JS object that maps to a DOM element. It is not a real DOM element, it's just a plain JS object. React keeps a light representation of the DOM in memory, which we refer to as the virtual DOM. 

* **React Element** 'Virtual DOM': Unlike the browser or the real DOM, the virtual DOM is cheap to create. When we change the state of a component, we get a new React element. React will then compare this element and its children with the previous one. It figures out what has changed, and then it will update a part of the real DOM to keep it in sync. 

* **DOM Element** 'Real DOM'

React vs Angular
| React |Angular  |
|--|--|
| Is a library. <br> It only takes care of rendering <br> the view, and making sure the <br> view is in sync with the state. <br> As such, React has a small API to learn. <br> When using React we need to use <br> libraries for things like routing, <br> or calling http services, etc. This gives <br> you the flexibility to choose which <br> libraries you work with, as opposed <br> with being stuck with the Angular <br> libraries.| Is a framework, or complete solution. |

