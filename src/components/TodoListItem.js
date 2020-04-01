import React from 'react';

export default function TodoListItem({todo, onTodoDelete}) {
    const deleteTodoHandler = () => {
        if (window.confirm('are you sure you want to delete')) {
            onTodoDelete(todo);
        }
    };

    return (<div className="todo-list-item">
        {todo.text}
        <div>
            <button onClick={deleteTodoHandler}>delete</button>
            <button>edit</button>
        </div>
    </div>)
}
