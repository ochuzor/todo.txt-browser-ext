import {
    getTodos, 
    saveTodo as dbSaveTodo,
    deleteTodo as dbDeleteTodo
} from '../data/index';

export const LOAD_TODOS_REQUEST = 'LOAD_TODOS_REQUEST';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILED = 'LOAD_TODOS_FAILED';

export const SAVE_TODO_REQUEST = 'SAVE_TODO_REQUEST';
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS';
export const SAVE_TODO_FAILED = 'SAVE_TODO_FAILED';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILED = 'DELETE_TODO_FAILED';

export const EDIT_TODO = 'EDIT_TODO';

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

// options = {searchTerm: '', page: 1}
export function fetchTodos(options = {searchTerm: '', page: 1}) {
    return (dispatch) => {
        dispatch(requestTodos());

        return getTodos(options)
            .then(
                data => dispatch(todoRequestSuccess(data)), 
                err => dispatch(todoRequestFailed(err))
            );
    };
}

export function requestTodos() {
    return {
        type: LOAD_TODOS_REQUEST
    };
}

export function todoRequestFailed(error) {
    return {
        type: LOAD_TODOS_FAILED,
        error
    }
}

export function todoRequestSuccess(data) {
    return {
        type: LOAD_TODOS_SUCCESS,
        data
    }
}

export function saveTodo(todo) {
    return (dispatch) => {
        dispatch(saveTodoRequest());

        return dbSaveTodo(todo)
            .then(
                data => dispatch(saveTodoSuccess(data)),
                (error) => dispatch(saveTodoFailed(error))
            );
    };
}

export function saveTodoRequest() {
    return {
        type: SAVE_TODO_REQUEST
    };
}

export function saveTodoSuccess(todo) {
    return {
        type: SAVE_TODO_SUCCESS,
        todo
    };
}

export function saveTodoFailed(error) {
    return {
        type: SAVE_TODO_FAILED,
        error
    };
}

export function editTodo(todo) {
    return {
        type: EDIT_TODO,
        todo
    };
}

export function deleteTodo(id) {
    return (dispatch) => {
        dispatch(deleteTodoRequest(id));

        return dbDeleteTodo(id)
            .then(
                data => dispatch(deleteTodoSuccess(data)),
                error => dispatch(deleteTodoFailed(error))
            );
    }
}

export function deleteTodoRequest(id) {
    return {
        type: DELETE_TODO_REQUEST,
        id
    };
}

export function deleteTodoSuccess(id) {
    return {
        type: DELETE_TODO_SUCCESS,
        id
    };
}

export function deleteTodoFailed(error) {
    return {
        type: DELETE_TODO_FAILED,
        error
    };
}

export function setSearchTerm(text = '') {
    return {
        type: SET_SEARCH_TERM,
        text
    };
}
