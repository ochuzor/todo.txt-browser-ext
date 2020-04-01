import { combineReducers } from 'redux'

import {
    SET_SEARCH_TEXT, 
    EDIT_TODO, 
    SET_TODOS
} from './actions';
import {generateSampleTodoTxts} from './sample-todos';

const sampleTodos = generateSampleTodoTxts(50);

const defaultState = {
	searchText: '',
	todos: {
		docs: sampleTodos,
		total: 100,
		page: 1,
		pageCount: 3
	},
	todoToEdit: null
}

function searchFilter(state = '', action) {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return action.searchText;
        default:
            return state;
    }
}

function editTodo(state = null, action) {
    switch(action.type) {
        case EDIT_TODO:
            return action.todo;
        default:
            return state;
    }
}

function todos(state = defaultState.todos, action) {
    switch(action.type) {
        case SET_TODOS:
            return action.todos;
        default:
            return state;
    }
}

// export function todoApp(state = defaultState, action) {
//     return {
//         searchFilter: searchFilter(state.searchText, action),
//         todos: todos(state.todos, action),
//         editTodo: editTodo(state.todoToEdit, action)
//     }
// }

const todoApp = combineReducers({
    searchFilter,
    todos,
    editTodo
})

export default todoApp
