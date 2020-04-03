import React, { useState } from 'react';
import { connect } from 'react-redux';

import {editTodo} from '../store/actions';
import EditTodoPane from './EditTodoPane';

const mapDispatchToProps = dispatch => {
    return {
        setTodoToEdit: todo => {
            dispatch(editTodo(todo));
        }
    };
}

const mapStateToProps = state => {
    return {
        todo: state.todoToEdit
    };
}

const newTodo = (id = '') => ({id, text: ''});

export function Footer({setTodoToEdit, todo = newTodo()}) {

    const [edit, showEdit] = useState(false);

    const onEditClick = () => {
        setTodoToEdit(newTodo());
        showEdit(true);
    };

    const closeTodoEdit = () => {
        showEdit(false);
        setTodoToEdit(newTodo(0));
    };

    const onTodoSave = (todo) => {
        console.log('saving:', todo)
        showEdit(false);
    };

    return (<div className="footer">
        {edit && <>
            <div className="bottom-btn-cntr">
                <button onClick={closeTodoEdit}>x</button>
            </div>
            <EditTodoPane todo={todo} onTodoSave={onTodoSave}
                key={todo.id} />
        </>}

        {!edit && <div className="bottom-btn-cntr">
            <button onClick={onEditClick}>+</button>
        </div>}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
