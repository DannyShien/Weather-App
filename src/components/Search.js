import React from 'react';


const Search = (props) => { 
    // console.log(props);
    return (
        <form 
            className = 'search center'
            onSubmit={(event) => {
                console.log(`I'M IN THE FORM`)
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
                    props.handleChange(e.target.value);
                }}
                value = {props.newInput} 
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