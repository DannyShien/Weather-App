import React from 'react';
import './Search.css'

const Search = (props) => { 
    return (
        <form className = 'search-form center' onSubmit={props.submit} >
            <input
                className = 'input'
                text = 'text' 
                placeholder = 'Search City'
                // onChange, accepts the new value of what is being changed for input
                onChange = {props.updateSearch}
                name='query'
                value = {props.input} 
            />
            <button 
                className = 'btn' 
                type = 'submit' 
                value = 'search'
            >Submit</button> 
        </form>  
    );
}

export default Search;