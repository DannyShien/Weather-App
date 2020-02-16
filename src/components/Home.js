import React, { Component } from 'react';
import Search from './Search';
import { Redirect } from 'react-router-dom';
import './Home.css'

// Home component is a statefull component(parent component).
class Home extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            query: '',
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
            </div>
        );
    }

    // Setting the state for 'city' to be used in the input. 
    updateSearch = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    // Sets 'redirect' to true when input is submitted
    setRedirect = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true
        }, () => {
            this.setState({
                query: ''
            })
        })
    }
    reset = () => {
        this.setState({
            query: ''
        })
    }
    
    passSearch = () => {
        const redirectTrue = this.state.redirect

        return (
            // Ternary: if redirectTrue is not 'true', <Search /> else <Redirect />
            !redirectTrue ?
                <Search
                    // Establishing properties to be passed to the Search component.
                    input = {this.state.query}
                    updateSearch= {this.updateSearch}
                    submit = {this.setRedirect}
                /> 
                : <Redirect to={{
                    // This format allow me to be more dynamic as to what I can pass through with Redirect. 
                    pathname: '/weather',
                    state: this.state.query
                }}/> 
                
        )
    }


}

export default Home;