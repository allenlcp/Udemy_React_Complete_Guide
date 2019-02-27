import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => 
    <Person
      click={() => props.click(index)}
      name={person.name}
      age={person.age}
      key={person.id} // usually passed id
      changed={event => props.changed(event, person.id)}
    />
  );

export default persons;