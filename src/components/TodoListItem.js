import React, { useState } from 'react';
import EditTodoPane from './EditTodoPane';

export default function TodoListItem({todo, onTodoDelete}) {
    const getTodoCopy = (td = todo) => {
        return Object.assign({}, td)
    };

    const [edit, showEdit] = useState(false);
    const [todoCopy, setTodoCopy] = useState(getTodoCopy()); 

    const deleteTodoHandler = () => {
        if (window.confirm('are you sure you want to delete')) {
            onTodoDelete(todo);
        }
    };

    const onEditClick = (todo) => {
        setTodoCopy(getTodoCopy());
        showEdit(true);
    };

    const closeTodoEdit = () => {
        showEdit(false);
    };

    const onTodoSave = (todo) => {
        console.log('saving:', todo)
        showEdit(false);
    };

    return (<>
        {!edit && <div className="todo-list-item">
            {todo.text}
            <div>
                <button onClick={deleteTodoHandler}>delete</button>
                <button onClick={onEditClick}>edit</button>
            </div>
        </div>}

        {edit && <EditTodoPane todo={todoCopy} onClose={closeTodoEdit}
            onTodoSave={onTodoSave} key={todo.id} />}
    </>)
}
