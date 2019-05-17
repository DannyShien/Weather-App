import React, { Component } from 'react';
import Search from './components/Search';
import { Redirect } from 'react-router-dom';


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
            (!this.state.redirect) ?
            <div className = 'weather-container'>
                <div className='weather'>   
                    <h1>RainOrShine 2.0</h1>
                    <div className = 'weather-display'>
                        <h4>What's the weather today?</h4>
                        <Search
                            // onSubmit = {this.onSubmit}
                            newInput = {this.state.city}
                            handleChange = {this.citySearch}
                            onSubmit = {this.setRedirect}
                        /> 
                    </div>
                </div>
                <div className = 'forecast-display'>
                    <h2 className = 'forecast-title'>3 hr Interval Forecast</h2>
                </div>
            </div>
            : <Redirect to='/weather' />
        );
    }

      // Setting the state for 'city' to be used in the input. 
      citySearch = (input) => {
        this.setState({
            city: input
        });
    }

    // When input is submitted, name of city is fetched from API to return weather info. 
    setRedirect = (event) => {
        const searchCity = this.state.city
        // event.preventDefault();
        console.log('CITY: ', searchCity);
        this.setState({
            redirect: true
        })
    }


}

export default Home;