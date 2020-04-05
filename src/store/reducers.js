import { combineReducers } from 'redux'

import {
    EDIT_TODO,
    LOAD_TODOS_REQUEST,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILED,
    SAVE_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    SET_SEARCH_TERM
} from './actions';

const defaultState = {
	searchText: '',
	todos: {
		docs: [], // sampleTodos,
		total: 0,
		page: 1,
        pageCount: 1,
        isLoading: false
	},
	todoToEdit: null
};

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
        case LOAD_TODOS_REQUEST:
            return Object.assign({}, 
                state,
                {isLoading: true});
        case LOAD_TODOS_SUCCESS:
            return Object.assign({}, 
                state, 
                action.data, 
                {isLoading: false});
        case LOAD_TODOS_FAILED:
            return Object.assign({}, 
                state, 
                {isLoading: false});

        case SAVE_TODO_SUCCESS:
            let docs = [];
            const oldTodoIndex = state.docs.findIndex(t => t.id === action.todo.id);
            if (oldTodoIndex !== -1) {
                docs = state.docs.map((todo, index) => {
                    if (index === oldTodoIndex) {
                      return Object.assign({}, todo, action.todo)
                    }
                    return todo
                });
            }
            else {
                docs = [action.todo, ...state.docs];
            }
            
            return Object.assign({}, state, {docs});

        case DELETE_TODO_SUCCESS: {
            const docs = state.docs.filter(doc => doc.id !== action.id);
            return Object.assign({}, state, {docs});
        }

        default:
            return state;
    }
}

function setSearchTerm(state = '', action) {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return action.text;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos,
    todoToEdit: editTodo,
    searchText: setSearchTerm
})

export default todoApp
