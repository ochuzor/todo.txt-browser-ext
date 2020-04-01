export const SAVE_TODO = 'SAVE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_TODOS = 'SET_TODOS';

export function saveTodo(todo) {
    return {
        type: SAVE_TODO,
        todo
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}

export function setSearchText(searchText = '') {
    return {
        type: SET_SEARCH_TEXT,
        searchText
    };
}

export function editTodo(todo) {
    return { 
        type: EDIT_TODO,
        todo
    };
}

export function setTodos(todos) {
    return {
        type: SET_TODOS,
        todos
    }
}
