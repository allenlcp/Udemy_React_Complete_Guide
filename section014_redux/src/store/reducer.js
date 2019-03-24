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
        ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case "DELETE_RESULT":
    //  Method_1 - immutable delete
    //   const id = 2;
    //   const newArray = [...state.results];
    //   newArray.splice(id, 1);

    //  Method_2
      const updatedArray =state.results.filter((el) => el.id !== action.resultElId);
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
