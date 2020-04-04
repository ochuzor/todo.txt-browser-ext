import React from 'react';
import { connect } from 'react-redux';

import {editTodo} from '../store/actions';
import TodoListItem from './TodoListItem';
import EditTodoPane from './EditTodoPane';

const mapDispatchToProps = dispatch => {
    return {
        editTodo: todo => {
            dispatch(editTodo(todo));
        }
    };
}

const mapStateToProps = state => {
    return {
        todoToEdit: state.todoToEdit
    };
}

export function TodoList({todos, todoToEdit, editTodo}) {
    const getTodoCopy = (todo) => {
        return Object.assign({}, todo)
    };
    const onTodoDelete = (todo) => {
        console.log('deleting:', todo);
    };

    const onEditClick = (todo) => {
        editTodo(getTodoCopy(todo))
    };

    const closeTodoEdit = () => {
        editTodo({id: '', text: ''})
    };

    const onTodoSave = (todo) => {
        console.log('save:', todo);
    }

    return (<div>
        { todos.map((todo) => {
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
