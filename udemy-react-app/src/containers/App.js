import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor')
    // old syntax - initializing state in constructor
    // this.state = {
    //   persons: [
    //     { id: "asd", name: "Max", age: 28 },
    //     { id: "daf", name: "Manu", age: 29 },
    //     { id: "gfg", name: "Stephanie", age: 26 }
    //   ],
    //   otherState: "some other value",
    //   showPersons: false
    // };
  }
 
  // New syntax allow you to declare state outside constructor and react will automatically load initialize the state
  state = {
    persons: [
      { id: "asd", name: "Max", age: 28 },
      { id: "daf", name: "Manu", age: 29 },
      { id: "gfg", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };
  
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

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
    console.log('[App.js] render...')
    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>;
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showCockpit:false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        /> : null}
        {persons}
      </div>
    );
  }
}

export default App;
