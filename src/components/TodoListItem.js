import React from 'react';

export default function TodoListItem({todo, onTodoDelete, onEditClick}) {

    const deleteTodoHandler = () => {
        if (window.confirm('are you sure you want to delete')) {
            onTodoDelete(todo);
        }
    };

    const editTodoHandler = () => {
        onEditClick(todo);
    }

    return (<div className="todo-list-item">
        {todo.text}
        <div>
            <button className="btn-delete" onClick={deleteTodoHandler}>
                <i className="fa fa-trash"></i>
            </button>
            <button className="btn-edit" onClick={editTodoHandler}>
                <i className="fa fa-edit"></i>
            </button>
        </div>
    </div>);
}
