import React, { useState } from 'react';
import { connect } from 'react-redux';

import {editTodo} from '../store/actions';
import EditTodoPane from './EditTodoPane';

const mapStateToProps = state => {
    return {
        todoCopy: state.todoToEdit
    };
}

const mapDispatchToProps = dispatch => {
    return {
        editTodo: todo => {
            dispatch(editTodo(todo));
        }
    };
}

export function TodoListItem({todo, onTodoDelete, editTodo, todoCopy}) {
    const getTodoCopy = (td = todo) => {
        return Object.assign({}, td)
    };

    const [edit, showEdit] = useState(false);

    const deleteTodoHandler = () => {
        if (window.confirm('are you sure you want to delete')) {
            onTodoDelete(todo);
        }
    };

    const onEditClick = (todo) => {
        editTodo(getTodoCopy());
        showEdit(true);
    };

    const closeTodoEdit = () => {
        editTodo({id: '', text: ''});
        showEdit(false);
    };

    const onTodoSave = (todo) => {
        console.log('saving:', todo)
        showEdit(false);
    };
    
    const canEdit = (cp) => cp && cp.id === todo.id;

    return (<>
        {!edit && <div className="todo-list-item">
            {todo.text}
            <div>
                <button onClick={deleteTodoHandler}>delete</button>
                <button onClick={onEditClick}>edit</button>
            </div>
        </div>}

        {edit && canEdit(todoCopy) && <EditTodoPane todo={todoCopy} onClose={closeTodoEdit}
            onTodoSave={onTodoSave} key={todo.id} />}
    </>)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
