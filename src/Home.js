import React, { Component } from 'react';
import Search from './components/Search';


class Home extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            city: ''
        }
    }



    render() {
        return (
            <div className = 'weather-container'>
                <div className='weather'>   
                    <h1>RainOrShine 2.0</h1>
                    <div className = 'weather-display'>
                        <h4>What's the weather today?</h4>
                        <Search
                            onSubmit = {this._onSubmit}
                            newInput = {this.state.city}
                            handleChange = {this.citySearch}
                        />
                    </div>
                </div>
                <div className = 'forecast-display'>
                    <h2 className = 'forecast-title'>3 hr Interval Forecast</h2>
                </div>
            </div>
        );
    }

      // Setting the state for 'city' to be used in the input. 
      citySearch = (input) => {
        // console.log(input)
        this.setState({
            city: input
        });
    }

    // When input is submitted, name of city is fetched from API to return weather info. 
    _onSubmit = (event) => {
        const searchCity = this.state.city
        event.preventDefault();
        console.log(searchCity);

    }

}

export default Home;