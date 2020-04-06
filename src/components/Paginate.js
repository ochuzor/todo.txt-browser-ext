import React from 'react';

export function Paginate() {
    const backPage = () => {}
    const forwardPage = () => {}

    return (<nav className="pagination-cntr">
        <button className="pagination-btn" onClick={backPage}>
            <i className="fa fa-chevron-left"></i>
        </button>
        <div className="pg-nbr-cntr">1</div>
        <button className="pagination-btn" onClick={forwardPage}>
            <i className="fa fa-chevron-right"></i>
        </button>
    </nav>);
}
