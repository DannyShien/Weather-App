import React from 'react';
import './Search.css'

const Search = (props) => { 
    console.log('SEARCH.JS ', props)
    
    return (
        <form 
            className = 'search-form center'
            onSubmit={(event) => {
                console.log(`FORM SUBMITTED`)
                event.preventDefault();
                props.submit(event)
            }} 
        >
            <input
                className = 'input'
                text = 'text' 
                placeholder = 'Search City'
                // onChange, accepts the new value of what is being changed for input
                onChange = {(e) => {
                    console.log(e.target.value)
                    props.handleChange(e.target.value)
                }}
                name='city'
                value = {props.Input} 
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