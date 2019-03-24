const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state); // copy - not deep clone
      newState.counter = state.counter + 1;
      return newState;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {};
    default:
      return state;
  }
};

export default reducer;
