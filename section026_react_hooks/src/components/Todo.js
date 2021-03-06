import React, { useEffect, useReducer, useMemo } from "react";
import axios from "axios";
import List from "./List";
import { userFormInput } from '../hooks/forms';

const todo = props => {
  // const [inputIsValid, setInputIsValid] = useState(false);
  // const [todoName, setTodoName] = useState("");
  // const [submittedTodo, setSubmittedTodo] = useState(null);
  // const [todoList, setTodoList] = useState([]);
  // const todoInputRef = useRef();
  const todoInput = userFormInput();

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state.concat(action.payload);
      case "SET":
        return action.payload;
      case "REMOVE":
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(todoListReducer, []);

  useEffect(() => {
    axios
      .get("https://react-hooks-39657.firebaseio.com/todos.json")
      .then(result => {
        console.log(result);
        const todoData = result.data;
        const todos = [];
        for (const key in todoData) {
          todos.push({
            id: key,
            name: todoData[key].name
          });
        }
        dispatch({ type: "SET", payload: todos });
      });
  }, []);

  // const mouseMoveHandler = event => {
  //   console.log(event.clientX, event.clientY);
  // };

  // useEffect(() => {
  //   document.addEventListener("mousemove", mouseMoveHandler);
  //   return () => {
  //     document.removeEventListener("mousemove", mouseMoveHandler);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (submittedTodo) {
  //     dispatch({ type: "ADD", payload: submittedTodo });
  //   }
  // }, [submittedTodo]);

  // const inputChangeHandler = event => {
  //   setTodoName(event.target.value);
  // };

  const todoAddHandler = () => {
    const todoName = todoInput.value;
    axios
      .post("https://react-hooks-39657.firebaseio.com/todos.json", {
        name: todoName
      })
      .then(res => {
        setTimeout(() => {
          const todoItem = {
            id: res.data.name,
            name: todoName
          };
          dispatch({ type: "ADD", payload: todoItem });
        }, 5000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const inputValidationHandler = event => {
  //   if (event.target.value.trim === "") {
  //     setInputIsValid(false);
  //   } else {
  //     setInputIsValid(true);
  //   }
  // };

  const todoRemoveHandler = todoId => {
    axios
      .delete(`https://react-hooks-39657.firebaseio.com/todos/${todoId}.json`)
      .then(res => {
        dispatch({
          type: "REMOVE",
          payload: todoId
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={todoInput.onChange}
        value={todoInput.value}
        style={{ backgroundColor: todoInput.validity ? "transparent" : "red" }}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      {useMemo(
        () => (
          <List items={todoList} click={todoRemoveHandler} />
        ),
        [todoList]
      )}
    </React.Fragment>
  );
};

export default todo;
