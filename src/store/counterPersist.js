import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

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
        case 'RESET' :
            return {
                count: 0,
            message: "RESET"
            };
        default:
            return state;
    }
}

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, counter);

export let store = createStore(persistedReducer);
export let pstore = persistStore(store);