import React from 'react';
import TodoListItem from './TodoListItem';

export default function({todos}) {
    return (<div>
        {todos.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)}
    </div>);
}
