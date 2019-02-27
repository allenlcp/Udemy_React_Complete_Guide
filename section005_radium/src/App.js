import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, {StyleRoot} from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "asd", name: "Max", age: 28 },
      { id: "daf", name: "Manu", age: 29 },
      { id: "gfg", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    // could have used indexOf() here
    // I'm finding the index of the person to be updated
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // another way - old
    // const person = Object.assign({}, this.state.persons[personIndex]);

    // getting copy of objects
    // get a copy of the person object
    const person = {
      ...this.state.persons[personIndex]
    };
    // change name of the person object
    person.name = event.target.value;

    // get a copy of the persons array
    const persons = [...this.state.persons];
    // update the person object from the persons array to the updated one
    persons[personIndex] = person;

    // updating old persons array with the new copy
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id} // usually passed id
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {classid: ,Name: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
