import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import SearchBar from './SearchBar';
import Footer from './Footer';

const mapStateToProps = state => {
    return {
        todos: state.todos.docs
    }
}

function Home({todos}) {
    return (<div className="home-container">
        <SearchBar />

        <div>
            <TodoList todos={todos} />
        </div>

        <Footer />
    </div>);
}

export default connect(mapStateToProps)(Home);
