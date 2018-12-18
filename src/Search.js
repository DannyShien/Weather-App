import React from 'react';

const Search = (props) => {
    return (
        <form 
            className = 'form center'
            onSubmit={(event) => {
            // event.preventDefault();
            props.onSubmit(event)
        }} 
        >
            <input
                className = 'input'
                text = 'text' 
                placeholder = 'Search City'
                // onChange, accepts the new value of what is being changed for input
                onChange = {(e) => {
                    // console.log(e.target.value);
                    props.handleChange(e.target.value);
                }}
                value = {props.newInput} 

            />
            <button className = 'btn' type = 'submit' value = 'search'>
                Submit</button> 
        </form>  
            );
}

export default Search;