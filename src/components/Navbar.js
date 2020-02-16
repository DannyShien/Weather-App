import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Search from './Search';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    render () {
        const searchBarStyle = {
            width: '50vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        return (
            <div className = 'navbar' style={searchBarStyle}>
                {/* Using 'Link' instead of an achor tag keep the links within React.  */}
                <Link to = '/' className = 'links'>Home</Link>
                <Search 
                    input={this.state.query}
                    updateSearch={this.updateSearch}
                    submit={this.handleSubmit}
                />
            </div>
        );
    }

    updateSearch = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetch(this.state.query)
        this.reset()
    }
    reset = () => {
        this.setState({
            query: ''
        })
    }

};

export default Navbar;