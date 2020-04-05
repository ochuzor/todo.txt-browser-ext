import React, { useState } from 'react';
import { connect } from 'react-redux';

import {setSearchTerm, fetchTodos} from '../store/actions';

const mapDispatchToProps = dispatch => {
    return {
        setSearchTerm: text => {
            dispatch(setSearchTerm(text));
        },
        fetchTodos: options => {
            dispatch(fetchTodos(options));
        }
    };
}

const mapStateToProps = state => {
    return {
        searchText: state.searchText
    };
}

export function SearchBar({searchText, setSearchTerm, fetchTodos}) {
    const [text, setTextValue] = useState(searchText);

    const handleChange = (event) => {
        const text = event.target.value;
        setTextValue(text);
        setSearchTerm(text);
        fetchTodos({searchTerm: text, page: 1});
    };

    return (<div className="search-bar"> 
        <input type="text" placeholder="Search..."  value={text} 
            onChange={handleChange} />
    </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
