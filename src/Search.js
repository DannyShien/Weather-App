import React from 'react';

const Search = (props) => {
    return (
        <form onSubmit={(event) => {
            // event.preventDefault();
            props.onSubmit(event)
        }} 
        >
            <input
                text = 'text' 
                placeholder = 'Search City'
                // onChange, accepts the new value of what is being changed for input
                onChange = {(e) => {
                    // console.log(e.target.value);
                    props.handleChange(e.target.value);
                }}
                value = {props.newInput} 

            />
            <input 
                type = 'submit'
                value = 'search'
            />
        </form>  
            );
}

export default Search;