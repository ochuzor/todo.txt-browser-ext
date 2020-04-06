import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

const PAGE_SIZE = 10;
export function FooterPageInfo({todos}) {
    const pageCount = Math.ceil(todos.total / PAGE_SIZE) || 1;
    return (<div className="footer-page-info-cntr">
        <div>showing {todos.docs.length} of {todos.total} items</div>
        <div>(page {todos.page} of {pageCount})</div>
    </div>)
}

export default connect(mapStateToProps)(FooterPageInfo);
