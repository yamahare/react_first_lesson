import { createStore } from 'redux';

const initialState = { 
    count: 0,
    message: "COUNTER"
};

const counter = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + 1,
                message: "INCREMENT"
            };
        case 'DECREMENT' :
            return {
                count: state.count - 1,
                message: "DECREMENT"
            };
        default:
            return state;
    }
}
export default createStore(counter);