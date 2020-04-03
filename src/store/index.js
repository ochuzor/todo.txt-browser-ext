import { createStore } from 'redux';
import todoApp from './reducers';
const store = createStore(todoApp);

// console.log(store.getState())

export default store;