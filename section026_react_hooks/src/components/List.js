import React from "react";

const List = props => {
  console.log("Rendering the list.... ");
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id} onClick={() => props.click(todo.id)}>
          {todo.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
