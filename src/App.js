import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Link
}   from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Weather from './components/Weather';
import About from './About';
import Home from './Home';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* <Navbar /> */}
                    {/* <Route path = '/' exact component = {Home} /> */}
                    {/* <Route path = '/about' component = {About} /> */}
                    <Route path = '/' component = {Weather} /> 
                </div>
            </Router>
        );
    }
}

export default App;
