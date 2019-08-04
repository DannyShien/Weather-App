import React, { Component } from 'react';
// Import BrowserRouter to use Route
import {
    BrowserRouter as Router,
    Route,

}   from 'react-router-dom';
import './App.css';

// Importing other components to connect my files.
import Home from './components/Home';
import Weather from './components/Weather';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/weather' component = {Weather} /> 
                </div>
            </Router>
        );
    }
}

export default App;
