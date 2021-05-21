# React Lifecycle Hooks

| Mount |Update  | Unmount |
|--|--|--|
|An instance of the component <br> is created and inserted into <br> the DOM. React will call the <br> following methods in order:| This happens when the state, <br> or the props, of a component <br> get changed. Whenever we <br> change the state of a component <br> or give it new props, <br> these two methods are called in order:  | This is when a component is <br> removed from the DOM <br> such as when we delete <br> the counter.  |
|`constructor`  |  |  |
|`render`  | `render` |  |
|`componentDidMount`  |`componentDidUpdate`  | `componentWillUnmount` |
