import React, { Component } from "react";
import classes from "./Person.module.css";

class Person extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Person.js] getDerivedStateFromProps', props);
    //     return state;
    //   }
    
  render() {
    console.log("[Person.js] render");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
