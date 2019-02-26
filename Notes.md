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

> Outputting dynamic content in jsx
>* use **{** js code here **}**

___

## **Props and State**
[Props & State](resources/pdf/props-state.pdf)


> When using class-based components it's this.props
``` jsx
class App extends Component {
  render() {
    return (<p>My name is {this.props}</p>);
  }
}
```

> Working with props (inside tag)
``` jsx
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Max" age="30"/>
        <Person name="Mary" age="28">Some text for person</Person>
        <Person name="Ted" age="15"/>
      </div>
    );
  }
}
```
``` jsx
import React from 'react';
const person = (props) => {
    return  <p>I'm a {props.name} and I am {props.age} years old!</p>
};
export default person;
```

> Working with props (children property)
>* children refers to any element between the opening and closing tag of our component
``` jsx
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Max" age="30"/>
        <Person name="Mary" age="28">Some text for person</Person>
        <Person name="Ted" age="15"/>
      </div>
    );
  }
}
```
``` jsx
import React from 'react';
const person = (props) => {
    return  (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};
export default person;
```
___

> this refer to class

___

> To Which Events Can You Listen?
https://reactjs.org/docs/events.html#supported-events

___

## **Understanding State**
[State](resources/pdf/state-learning.pdf)

> State is managed from inside a component
> State is js object
> On state change - dom will re-render

> Manipulating state
>* We should not mutate state directly
``` jsx
~~this.state.persons[0].name = "Maxi"~~
```
>* use this.setState
``` jsx
this.setState({
      persons: [
        {name: 'Maximillian', age: 28}
      ]
    });
```

## **using setState() hook**
[user-state-hook](resources/pdf/use-state-hook.pdf)

> useState -> return two things
> 1. personsState -> give you access to the state
> 2. setPerstonState -> function however it replace the state - doesn't do any merge - need to manually copy from other state
``` jsx
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
const app = props =>{
    const [personsState, setPersonsState] = useState({
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stepanie', age: 26}
      ] //,
      // otherState: 'some other value'
    });

    // However the more elegant way is to use multiple useState to manage state
    const [otherState, setOtherState] = useState({text: 'some other value'});

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      setPersonsState({
        persons: [
          {name: 'Maximillian', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stepanie', age: 27}
        ],
        // otherSate: personsState.otherState // -> manually adding it
      });
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Some text for person</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
}

// export default App;
export default app;
```
___

## **Stateful vs Stateless Components**

___

## **Passing methods references between components**
> 1. use .bind(this, parameters) - preferred react won't render unnecessarily
``` jsx
<button onClick={this.switchNameHandler.bind(this, "Maxi")}>Switch Name</button>
```
> 2. pass anonymous function - however not every efficient
``` jsx
<button onClick={() => this.switchNameHandler('Maximillian')}>Switch Name</button> 
```
___

## **Two way binding**

``` jsx
nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 29 },
      ]
    });
  };

render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maxi")}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
       
      </div>
    );
}
```
> 1. display -> value={props.name}
> 2. onChange -> call function (this.nameChangeHandler) from props

``` jsx 
import React from 'react';

const person = (props) => {
    return  (
        <div>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;
```

## **Styling and Stylesheet**
> 1. Importing css
``` jsx
import './Person.css';
```
> 2. Inline style
``` jsx
render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style}
                onClick={() => this.switchNameHandler()}>Switch Name</button>
      </div>
    );
  }
```