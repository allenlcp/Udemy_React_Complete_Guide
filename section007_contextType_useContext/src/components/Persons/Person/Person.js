import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClass from '../../../hoc/withClass';
import AuthContext from "../../../context/auth-context";


class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

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
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
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

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, classes.Person);
