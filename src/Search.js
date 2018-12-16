import React from 'react';

const Search = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input
                text = 'text'
                placeholder = 'Search City'
            />
            <input 
                type = 'submit'
                value = 'search'
            />
        </form>  
            );
}

export default Search;