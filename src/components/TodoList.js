import React from 'react';
import TodoListItem from './TodoListItem';

export default function({todos}) {
    const onTodoDelete = (todo) => {
        console.log(todo);
    };

    return (<div>
        {todos.map((todo) => <TodoListItem key={todo.id} todo={todo} onTodoDelete={onTodoDelete} />)}
    </div>);
}
