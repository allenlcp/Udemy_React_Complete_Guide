## **next-gen-js-summary**
[next-gen-js-summary](resources/pdf/components.pdf)

> JS Array Functions
>* map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
>* find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
>* findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
>* filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
>* reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
>* concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
>* slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
>* splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

___


## **REACT**

[Component](resources/pdf/components.pdf)

> Component is just a function returning some jsx
``` jsx
import React from 'react'; // When using jsx, we need to import react

const person = () => {
    return  <p>I'm a Person!</p>
};

export default person;
```
``` jsx
import React, { Component } from 'react';
import './App.css';
import Person from './Person';  // importing component

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person/>   {/* using component*/}
      </div>
    );
  }
}
export default App;
```
____
