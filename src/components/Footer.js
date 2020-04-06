import React, { useState } from 'react';
import { connect } from 'react-redux';

import {editTodo, saveTodo} from '../store/actions';
import EditTodoPane from './EditTodoPane';
import Paginate from './Paginate';
import FooterPageInfo from './FooterPageInfo';

const mapDispatchToProps = dispatch => {
    return {
        setTodoToEdit: todo => {
            dispatch(editTodo(todo));
        },
        saveTodo: todo => {
            dispatch(saveTodo(todo));
        }
    };
}

const mapStateToProps = state => {
    return {
        todo: state.todoToEdit
    };
}

const newTodo = (id = '') => ({id, text: ''});

export function Footer({setTodoToEdit, todo = newTodo(), saveTodo}) {

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
        saveTodo(todo);
        showEdit(false);
    };

    return (<div className="footer">
        {edit && <>
            <div className="bottom-btn-cntr">
                <button className="btn-close" onClick={closeTodoEdit}>
                    <i className="fa fa-times"></i>
                </button>
            </div>
            <EditTodoPane todo={todo} onTodoSave={onTodoSave}
                key={todo.id} />
        </>}

        {!edit && <div className="btm-btn-row-cntr">
            <Paginate />
            <FooterPageInfo />
            <button className="add-btn" onClick={onEditClick}>
                <i className="fa fa-plus"></i>
            </button>
        </div>}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
