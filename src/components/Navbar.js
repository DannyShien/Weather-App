import React, { Component } from 'react';
// Importing 'Link' form react-router-dom
import { Link } from 'react-router-dom';
import './Navbar.css';
import Search from './Search';

// Functional componenet that just returns JSX for a navbar.
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondaryCity: '',

        }
        
    }

    componendDidMount() {
        if (!this.state.secondaryCity) {
            return null
        } else {
            return this.secondaryFetch()
        }
    }

    render () {
        const searchBarStyle = {
            width: '50vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        console.log(`ANOTHER RENDER`)
        return (
            <div className = 'navbar' style={searchBarStyle}>
                {/* Using 'Link' instead of an achor tag keep the links within React.  */}
                <Link to = '/' className = 'links'>Home</Link>
                <Search 
                    Input={this.state.secondaryCity}
                    handleChange={this.secondarySearch}
                    submit={this.secondarySearch}
                />
            </div>
        );
    }

    secondarySearch = (input) => {
        // console.log(`SECONDARY FORM SUBMITTED`)
        this.setState({
            secondaryCity: input
        });
    }

    secondarySubmit = () => {
        // event.preventDefault();
    }

    secondaryFetch = () => {
        console.log(`SECONDARY FETCH: `, this.state.secondaryCity)
        const secondarySearch = this.state.secondaryCity
        // console.log(`SECONDARY SEARCH: `, this.state.secondaryCity)
        const owKey = `${process.env.REACT_APP_WEATHER_API}`
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${secondarySearch}&type=accurate&APPID=${owKey}`)
            .then(r => {return r.json()})
            .catch(err => {console.log(err)})
            .then(this.getTheWeather)
       
    }

};

export default Navbar;