const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if (action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());


const temp1 = {
    counter: 0,
    results: []
};
console.log(temp1);

const temp2 = Object.assign({}, temp1);
temp2.counter = temp1.counter + 1;
console.log(temp2);

const temp3 = {
    ...temp1,
    counter: temp1.counter + 1
}
console.log(temp3);
