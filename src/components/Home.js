import React, { Component } from 'react';
import Search from './Search';
import { Redirect } from 'react-router-dom';
import './Home.css'

// Home component is a statefull component(parent component).
class Home extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            city: '',
            redirect: false
        }
    }
    render() {
        return (
            <div className = 'search-container'>
                <div className='search'>   
                    <h1>RainOrShine 2.0</h1>
                    <div className = 'search-display'>
                        <h4>What's the weather today?</h4>
                        {/* Cannot call a function inside the render, will need to envoke with () */}
                        {this.passSearch()}
                    </div>
                </div>
                {/* <div className = 'forecast-display'>
                    <h2 className = 'forecast-title'>3 hr Interval Forecast</h2>
                </div> */}
            </div>
            
        );
    }

    // Setting the state for 'city' to be used in the input. 
    citySearch = (input) => {
        this.setState({
            city: input
        });
    }

    // Sets 'redirect' to true when input is submitted
     setRedirect = (event) => {
        const newCity = this.state.city
        event.preventDefault();
        console.log(`CITY: `, newCity);
        this.setState({
            redirect: true
        })
    }

    
    passSearch = () => {
        const redirectTrue = this.state.redirect
        console.log(`This is 'true'? `, redirectTrue)
        return (
            // Ternary: if redirectTrue is not 'true', <Search /> else <Redirect />
            !redirectTrue ?
                <Search
                    // Establishing properties to be passed to the Search component.
                    newInput = {this.state.city}
                    handleChange = {this.citySearch}
                    submit = {this.setRedirect}
                /> 
                : <Redirect to={{
                    // This format allow me to be more dynamic as to what I can pass through with a Redirect. 
                    pathname: '/weather',
                    state: this.state.city
                }}/> 
                
        )
    }


}

export default Home;