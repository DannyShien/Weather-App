import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Link
}   from 'react-router-dom';
import Navbar from './Navbar';// import './App.css';
import Landing from './Landing';
import About from './About';
import Weather from './Weather';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                <div>
                    <Navbar />
                    <Route path = '/' exact component = {Landing} />
                    <Route path = '/about' component = {About} />
                    <Route path = '/weather' component = {Weather} /> 
                    <h1>Hello landing page</h1>
                    
                </div>
                </Router>
            </div>
        );
    }
}

export default App;
