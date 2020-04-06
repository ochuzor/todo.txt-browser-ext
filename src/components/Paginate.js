import React from 'react';
import { connect } from 'react-redux';

import {fetchTodos, PAGE_SIZE} from '../store/actions';

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: todo => {
            dispatch(fetchTodos(todo));
        }
    };
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        searchText: state.searchText
    };
}

export function Paginate({todos, fetchTodos, searchText}) {
    const pageCount = Math.ceil(todos.total / PAGE_SIZE);
    const currentPage = todos.page;

    const gotoPage = (num) => {
        const page = parseInt(num, 10) || 0;
        if (page > 0 && page <= pageCount) {
            fetchTodos({searchText, page});
        }
    };

    return (<nav className="pagination-cntr">
        <button className="pagination-btn" onClick={() => gotoPage(currentPage - 1)}>
            <i className="fa fa-chevron-left"></i>
        </button>
        <div className="pg-nbr-cntr">{currentPage}</div>
        <button className="pagination-btn" onClick={() => gotoPage(currentPage + 1)}>
            <i className="fa fa-chevron-right"></i>
        </button>
    </nav>);
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginate);
