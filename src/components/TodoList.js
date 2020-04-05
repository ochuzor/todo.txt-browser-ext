import React from 'react';
import { connect } from 'react-redux';

import {
    editTodo, 
    saveTodo,
    deleteTodo
} from '../store/actions';
import TodoListItem from './TodoListItem';
import EditTodoPane from './EditTodoPane';

const mapDispatchToProps = dispatch => {
    return {
        editTodo: todo => {
            dispatch(editTodo(todo));
        },
        saveTodo: todo => {
            dispatch(saveTodo(todo));
        },
        deleteTodo: id => dispatch(deleteTodo(id))
    };
}

const mapStateToProps = state => {
    return {
        todoToEdit: state.todoToEdit
    };
}

export function TodoList({todos, todoToEdit, editTodo, saveTodo, deleteTodo}) {
    const getTodoCopy = (todo) => {
        return Object.assign({}, todo)
    };
    const onTodoDelete = (todo) => {
        deleteTodo(todo.id);
    };

    const onEditClick = (todo) => {
        editTodo(getTodoCopy(todo))
    };

    const closeTodoEdit = () => {
        editTodo({id: '', text: ''})
    };

    const onTodoSave = (todo) => {
        saveTodo(todo);
        closeTodoEdit();
    }

    return (<div>
        {todos.map((todo) => {
            return (<div key={todo.id}>
                {todoToEdit && todoToEdit.id === todo.id ? (<EditTodoPane todo={todoToEdit} onClose={closeTodoEdit}
                    onTodoSave={onTodoSave} />) :
                (<TodoListItem 
                    todo={todo} 
                    onTodoDelete={onTodoDelete}
                    onEditClick={onEditClick} />)}
            </div>);
        })}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
