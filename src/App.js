import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Link
}   from 'react-router-dom';
import Navbar from './Navbar';// import './App.css';
import Weather from './Weather';
import About from './About';
import Home from './Home';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                <div>
                    <Navbar />
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/about' component = {About} />
                    <Route path = '/weather' component = {Weather} /> 
                    
                    
                </div>
                </Router>
            </div>
        );
    }
}

export default App;
