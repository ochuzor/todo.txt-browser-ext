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
            <button onClick={deleteTodoHandler}>delete</button>
            <button onClick={editTodoHandler}>edit</button>
        </div>
    </div>);
}
