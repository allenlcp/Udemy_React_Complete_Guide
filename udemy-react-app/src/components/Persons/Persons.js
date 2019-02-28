import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // condition on whether to update of not
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   console.log(nextProps);
  //   console.log(nextState);
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.click !== this.props.click 
  //   ){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // Legacy hooks
  // Use getSnapshotBeforeUpdate instead
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  getSnapshotBeforeUpdate(nextProps, nextState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    console.log(nextProps);
    console.log(nextState);
    return {message: 'Snapshot'};
  }

  // Legacy hooks
  // componentWillUpdate(){
  // }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot.message);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log("[Persons.js] render");
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.click(index)}
        name={person.name}
        age={person.age}
        key={person.id} // usually passed id
        changed={event => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
