import React from 'react';

export default function TodoListItem({todo}) {
    return (<div className="todo-list-item">
        {todo.text}
        <div>
            <button>delete</button>
            <button>edit</button>
        </div>
    </div>)
}
