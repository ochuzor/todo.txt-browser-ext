import React from 'react';
import TodoList from './TodoList';

const todos = [
    { id: 1, text: 'todo 1'},
    { id: 2, text: 'todo 1'},
    { id: 3, text: 'todo 1'},
    { id: 4, text: 'todo 1'},
    { id: 5, text: 'todo 1'},
    { id: 6, text: 'todo 1'},
    { id: 7, text: 'todo 1'},
    { id: 8, text: 'todo 1'},
    { id: 9, text: 'todo 1'},
    { id: 10, text: 'todo 1'}
];

export default function Home() {
    return (<div>
        <TodoList todos={todos} />
    </div>);
}
