import React, { useState } from 'react';
import EditTodoPane from './EditTodoPane';

export default function Footer() {
    const newTodo = (id = '') => ({id, text: ''});

    const [edit, showEdit] = useState(false);
    const [todo, setTodo] = useState(newTodo());

    const onEditClick = (todo) => {
        setTodo(newTodo());
        showEdit(true);
    };

    const closeTodoEdit = () => {
        showEdit(false);
        setTodo(newTodo(0));
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
