import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const initData = { 
    data: [],
    message: 'please type message',
    mode: 'default',
    fdata: []
};

const memos = (state=initData, action) => {
    switch(action.type) {
        case 'ADD' : return addReduce(state, action);
        case 'DELETE' : return deleteReduce(state, action);
        case 'FIND' : return findReduce(state, action);
        default: return state;
    }
}

const persistConfig = {
    key: 'memo',
    storage,
    blacklist: ['message', 'mode', 'fdata'],
    whitelist: ['data']
}

const persistedReducer = persistReducer(persistConfig, memos);


const addReduce = (state, action) => {
    let d = new Date();
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    let data = {
        message: action.message,
        created: f
    };
    let newdata = state.data.slice();
    newdata.unshift(data);
    return {
        data: newdata,
        message: 'Added!',
        mode: 'default',
        fdata: []
    }
}

const deleteReduce = (state, action) => {
    let newdata = state.data.slice();
    newdata.splice(action.index, 1);
    return {
        data: newdata,
        message: `delete ${action.index}`,
        mode: 'delete',
        fdata: []
    }
}

const findReduce = (state, action) => {
    let f = action.find;
    let fdata = [];
    state.data.forEach(value=>{
        if(value.message.indexOf(f) >= 0){ fdata.push(value) }
    })
    return {
        data: state.data,
        message: `find ${f}`,
        mode: 'find',
        fdata: fdata
    }
}

// アクション
export function addMemo(text){
    return {
        type: 'ADD',
        message: text
    }
}

export function deleteMemo(num){
    return {
        type: 'DELETE',
        index: num
    }
}

export function findMemo(text){
    return {
        type: 'FIND',
        find: text
    }
}
export let memosStore = createStore(persistedReducer);
export let memosPStore = persistStore(memosStore);