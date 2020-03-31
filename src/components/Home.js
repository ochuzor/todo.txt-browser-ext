import React from 'react';
import TodoList from './TodoList';
import SearchBar from './SearchBar';
import Footer from './Footer';

const todos = [...Array(25).keys()]
    .map(i => ({ id: i + 1, text: `todo ${i}`}));

const searchTerm = 'search term';
export default function Home() {
    return (<div className="home-container">
        <SearchBar search={searchTerm} />

        <div>
            <TodoList todos={todos} />
        </div>

        <Footer />
    </div>);
}
