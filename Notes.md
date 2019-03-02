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
> stateful (container) -> component that manages states
> stateless (dumb components) -> functional components that doesn't use state; even (react16) though we can do it now with hooks

|class-based|functional|
|---|---|
|class XY extends Component|const XY = props => {...}|
|access to state|access to state(useState())|
|lifecycle hooks|not supported|
|access state and props via 'this'|access props via "props"|
|this.state.XY & this.props.XY|props.XY|

> Use class-based -> if you need to manage State or access to lifecycle hooks and you don't want to use React Hooks!
> Use functional -> use in all cases



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

___

no block statement in jsx only oneline e.g ternary operator eligible but not if else statements
___

Handling dynamic content "The JS way"
> Ternary op not optimal
> Every time reactjs render() it will process all code before return(), there can add code before return() for processing

___

## **Outputting List**
> Use js map()
``` jsx
<div>
    {this.state.persons.map((persons, index) => {
        return <Person 
        click={() => this.deletePersonHandler(index)}
        name={persons.name}
        age={persons.age} />
    })}
</div> 
```
___

## **Immutability**
https://academind.com/learn/javascript/reference-vs-primitive-values/
> **We should update state in a immutable fashion**
> If not, we are passing as reference and mutating it
``` jsx
const persons = this.state.persons;
// -> any other operations here on persons is mutating the original array leading to wierd effects
```
> 1. use slice() to make a copy of a list
``` jsx
const persons = this.state.persons.slice();
```
> 2. use spread operation
``` jsx
const persons = [...this.state.persons];
```

___

## **Lists and Keys**
> key prop required
> helps react update list efficiently
``` jsx
{this.state.persons.map((persons, index) => {
    return <Person 
    click={() => this.deletePersonHandler(index)}
    name={persons.name}
    age={persons.age} 
    key={person.id}/>  // usually passed id
})}
```
___

## **Immutable process to update an object in an array**
``` jsx
nameChangeHandler = (event, id) => {
    // could have used indexOf() here
    // I'm finding the index of the person to be updated
    const personIndex = this.state.persons.findIndex(p => {
      return p.id  === id;
    })

    // another way - old
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // getting copy of objects
    // get a copy of the person object
    const person = {
      ...this.state.persons[personIndex]}
    ;

    // change name of the person object
    person.name = event.target.value;

    // get a copy of the persons array
    const persons = [...this.state.persons];
    // update the person object from the persons array to the updated one
    persons[personIndex] = person;

    // updating old persons array with the new copy
    this.setState({persons: persons});
};
```

## **Styling**
> Setting class dynamically - using js

> Use radium (npm) for more complex css e.g css pseudo classes

> Import radium StyleRoot for media queries

## **npm run eject**
> config folder -> configuration files, mainly webpack
> scripts folders -> have files for each command in the package.json

## **CSS Module**
> Imported css files need to end with "*.module.css"

## **Pseudo Selectors**
> Use css modules and will work

___

## **Debugging**
> Use error boundary - mainly for dev

___

## **React Components and Internals**
> Components vs Container

> Can return a list without divs
> Otherwise, we need divs

___

## **Lifecycle Hooks has absolutely NOTHING to do with React Hooks**
___

## **Component Lifecycle**
> Only available in class-based components

|class-based components|Desc|
|---|---|
|constructor()||
|getDerivedStateFromPost()||
|shouldComponentUpdate()||
|getSnapshotBeforeUpdate()||
|componentDidUpdate()||
|componentDidCatch()||
|componentDidMount()||
|componentWillUnmount()||
|render()||


## **Lifecycle - classed based**
[lifecycle-creation-learning-card](lifecycle-creation-learning-card.pdf)

[lifecycle-update-external-learning-card](lifecycle-update-external-learning-card.pdf)


> Lifecycle for props changes 
``` jsx
static getDerivedStateFromProps(props, state){return state}

// condition on whether to update of not
shouldComponentUpdate(nextProps, nextState){return true}

// Legacy hooks
// componentWillReceiveProps(props){...}

getSnapshotBeforeUpdate(nextProps, nextState){return obj}

// Legacy hooks
// componentWillUpdate(){}

componentDidUpdate(prevProps, prevState, snapshot){...}
```

> Lifecycle for state changes 
``` jsx
shouldComponentUpdate(nextProps, nextState){return true;}

componentDidUpdate(){}
```



## **Lifecycle - functional component**
> Use useEffect from react
> it runs after the render() method
``` jsx
import React, {useEffect} from "react";
```

> pass a function to it
``` jsx
useEffect(() => {
  console.log('[Cockpit.js] useEffect');
});
```

> useEffect runs on every update
> even on first render

> Controlling useEffect behavior
``` jsx
useEffect(() => {
  console.log('[Cockpit.js] useEffect');
  // http request ...
  setTimeout(() => {
    alert('Saved data to cloud!');
  }, 1000);
}, [props.persons]);  // pass what needs to change to trigger
```
> Run only once 
``` jsx
useEffect(() => {
  console.log('[Cockpit.js] useEffect');
  // http request ...
  setTimeout(() => {
    alert('Saved data to cloud!');
  }, 1000);
}, []);  // pass empty array - will run once but won't re-run as no object is specify for re-run, this the empty array
```

> Clean up work 
>* Class based
``` jsx
componentWillUnmount(){}
```
> Functional
> Here it runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle!
``` jsx
useEffect(() => {
  console.log('[Cockpit.js] useEffect');
  // http request ...
  setTimeout(() => {
    alert('Saved data to cloud!');
  }, 1000);
  return () => {
    console.log('[Cockpit.js] cleanup work in useEffect');
  }
}, []);  // -> [] is for when component gets destroyed
```

> Run cycle
``` jsx
useEffect(() => {
  console.log("[Cockpit.js] 2nd useEffect");
  return () => {
    console.log("[Cockpit.js] cleanup work in 2nd useEffect");
  };
});
```
> First run
``` jsx
[Cockpit.js] 2nd useEffect
```
> Second run
``` jsx
[Cockpit.js] cleanup work in 2nd useEffect  // -> return runs first 
[Cockpit.js] 2nd useEffect
```

___


## **Performance optimization**
> class based component - shouldComponentUpdate()
``` jsx
shouldComponentUpdate(nextProps, nextState){
  console.log('[Persons.js] shouldComponentUpdate');
  if (nextProps.persons !== this.props.persons){
    return true;
  } else {
    return false;
  }
}
```

> functional component - use React.memo();
``` jsx
export default React.memo(cockpit);
```
___

## **PureComponent**
> With purecomponent we do not need to implement shouldComponentUpdate() with all the checks - it automatically does it
> Instead of doing this:
``` jsx
shouldComponentUpdate(nextProps, nextState){
  console.log('[Persons.js] shouldComponentUpdate');
  console.log(nextProps);
  console.log(nextState);
  if (
    nextProps.persons !== this.props.persons ||
    nextProps.changed !== this.props.changed ||
    nextProps.click !== this.props.click 
  ){
    return true;
  } else {
    return false;
  }
}
```
> We do this:
``` jsx
import React, { PureComponent } from "react";

class Persons extends PureComponent {...}

export default Persons;
```

___

## **How react updates the real dom**

![HowReactUpdatesTheDom](resources/images/HowReactUpdatesTheDom.png)

___


## **Rendering Adjacent JSX Elements**
[react-adjacent-jsx](resources/pdf/react-adjacent-jsx.pdf)

> By default javascript wants/allows you to return only one expression <div>
``` jsx
return (
  // main div here
  <div className={classes.Person}> 
    <p onClick={this.props.click}>
      I'm a {this.props.name} and I am {this.props.age} years old!
    </p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name} />
  </div>
);
```

> Actually react allows us to return an array of element as long as they have a key
``` jsx
render() {
  console.log("[Person.js] render");
  // returning array [] below rather than ()
  return [
      <p key="i1" onClick={this.props.click}>
        I'm a {this.props.name} and I am {this.props.age} years old!
      </p>,
      <p key="i2">{this.props.children}</p>,
      <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />     
  ];
}
```

> Using higher order component (hoc)
> Just create an empty component and return the children
``` jsx
// import React from 'react'; -> no need to import React as we are not using jsx
const aux = props => props.children;  
export default aux;  // on windows avoid aux (reserver word) - use something else e.g auxiliary
```
``` jsx
return (
  <Aux> 
    <p onClick={this.props.click}>
      I'm a {this.props.name} and I am {this.props.age} years old!
    </p>
    <p>{this.props.children}</p>
    <input
      type="text"
      onChange={this.props.changed}
      value={this.props.name}
    />
  </Aux>
);
```

> Now we have build-in component/wrapper, no need to custom build one, just use <React.Fragment> instead
``` jsx
return (
  <React.Fragment>
    <p onClick={this.props.click}>
      I'm a {this.props.name} and I am {this.props.age} years old!
    </p>
    <p>{this.props.children}</p>
    <input
      type="text"
      onChange={this.props.changed}
      value={this.props.name}
    />
  </React.Fragment>
);
```
> Our just import the Fragment compoment
``` jsx
import React, { Component, Fragment } from "react";
```
> and then
``` jsx
return (
  <Fragment>
    <p onClick={this.props.click}>
      I'm a {this.props.name} and I am {this.props.age} years old!
    </p>
    <p>{this.props.children}</p>
    <input
      type="text"
      onChange={this.props.changed}
      value={this.props.name}
    />
  </Fragment>
);
```

____

## **Higher Order Function (HOC)**
> Component that wraps other component to add things to it
> e.g styling, http error handling, additional html, additional logic

>* Method 1 - better for styling, additional html
``` jsx
import React from "react";
const withClass = props => (
  <div className={props.classes}>{props.children}</div>
);
export default withClass;
```

>* Method 2 - added logic
>* First argument -> WrappedComponent -> needs to start with Capital Letters because it will be a reference to a component
>* 2nd argument -> is what you need in you hoc, can accept as many other arguments as we need for the hoc

``` jsx
import React from "react";
// This is a normal function that returns a react component function
const withClass = (WrappedComponent, className) => {
  {/* return react component */}
  return props => (
    <div className={className}>
      <WrappedComponent />  {/* what the WrappedComponent return is injected here */}
    </div>
  );
};
export default withClass;
```

``` jsx
import React, { Component } from "react";
import classes from "./App.module.css";
...
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends Component {
  ... constructor, lifecycle event function, other functions and etc
  render() {
    ... other logic here
    return (
      <Aux>
        .... jsx here
      </Aux>
    );
  }
}

export default withClass(App, classes.App); 
```
___

## **Passing unknown props**
> pass the destructured props
``` jsx
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/>  {/* destructuring using spread operators */}
    </div>
  );
};
```

___


## **Setting state correctly**
> Calling this.setSate({obj to be updated}) -> does not guarantee that the object will be updated.  React will decide when it's ready to do so.
> Calling this.state.variable -> does not guarantee it is the latest changed variable

> Best way to do it is to pass an anonymous function to this.setState;
> Recommended way (not optional - best pattern) when depending on old state
``` jsx
this.setState((prevState, props) => {
  return { 
    persons: persons, 
    changeCounter:  prevState.changeCounter + 1
  }
});
```
___

## **Using PropTypes**
> npm install prop-types -> from react official team but not integrated in react core lib
> works on both functional and class based components
``` jsx
import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    console.log("[Person.js] render");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

// Defining types for the props
Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, classes.Person);
```
___


## **Using Refs - class based components**
> access jsx element - without 2 way binding
> ref is like key - special react element

> Method 1
``` jsx
class Person extends Component {

  componentDidMount(){
    this.inputElement.focus();
  }

  render() {
    console.log("[Person.js] render");
    return (
      <Aux>
        ...
        <input
          type="text"
          ref={(inputEl) => {this.inputElement = inputEl}}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}
```

> Method 2 - using constructor - React.createRef()
``` jsx
class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] render");
    return (
      <Aux>
        ...
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}
```

___

## **Using Refs - functional components**
> Import useRef 
``` jsx
Import React, { useEffect, useRef } from "react";
...

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);
  ...
  return (
    <div className={classes.Cockpit}>
      ...
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default React.memo(cockpit);

```
___

## **Prop chains problems**
> Use createcContext() - to bypass middle compoments
> Make obj, array, string, number etc available without using props

``` jsx
import React from 'react';
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});
export default authContext;
```

``` jsx
...
import AuthContext from "../context/auth-context";

class App extends Component {
  ...
  state = {
    ...
    authenticated: false
  };

  ...

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    ...
    return (
      <Aux>
        ...
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated, // state ref
            login: this.loginHandler // function ref
          }} // first {} is for dynamic content, second{} object that will be available to the consumers
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
```
> Bypassing Persons.js, go straight to Person.js
``` jsx
...
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  ...
  render() {
    console.log("[Person.js] render");
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
        </AuthContext.Consumer>
        ...
      </Aux>
    );
  }
}
```

``` jsx
...
import AuthContext from '../../context/auth-context';

const cockpit = props => {
  ...
  return (
    <div className={classes.Cockpit}>
      ...
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};
...
```
___

## **More elegant way than above**
> context only accessible from jsx
> Classed based components - use "static contextType"
``` jsx
...
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  ...

  // need to be "static" and variable "contextType" should be as is otherwise won't work
  static contextType = AuthContext;

  componentDidMount(){
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] render");
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
        ...
      </Aux>
    );
  }
}
...
```

> Functional components - use "useContext"
``` jsx
import React, { useEffect, useRef, useContext } from "react";
...
import AuthContext from '../../context/auth-context';

const cockpit = props => {
  ...
  const authContext = useContext(AuthContext);
  ...
  return (
    <div className={classes.Cockpit}>
      ...
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};
```

____

> More on useEffect(): https://reactjs.org/docs/hooks-effect.html

> State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html

> PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html

> Higher Order Components: https://reactjs.org/docs/higher-order-components.html

> Refs: https://reactjs.org/docs/refs-and-the-dom.html
____


## **Planning a React App**
> Component Tree / Component Structure
> Application State(Data)
> Components (stateless) vs Containers (stateful)


____

[...Array(2)] -> creates any array of 2 empty element;

___

## **http / ajax**
> componentDidMount() -> best place to send http request

## **axios**
> axios Interceptors - like AOP
``` javascript
axios.interceptors.request.use((request) => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
```

Removing Interceptors
Section 9, Lecture 196
You learned how to add an interceptor, getting rid of one is also easy. Simply store the reference to the interceptor in a variable and call eject  with that reference as an argument, to remove it (more info: https://github.com/axios/axios#interceptors):
``` javascript
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```
___

## **Routing**

![routing-learning-card](resources/pdf/routing-learning-card.pdf)
