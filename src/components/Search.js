import React from 'react';


const Search = (props) => { 
    return (
        <form 
            className = 'search center'
            onSubmit={(event) => {
                console.log('IN THE FORM')
            event.preventDefault();
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
            <button 
                className = 'btn' 
                type = 'submit' 
                value = 'search'
                // onClick={props.click}
            >Submit</button> 
        </form>  
    );
}

export default Search;