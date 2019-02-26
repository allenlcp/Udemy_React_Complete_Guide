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


