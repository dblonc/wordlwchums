import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <div>
                        <Link to={'/main'}>Profile</Link> 
                    </div>
                    <div>
                        <Link to={'/daily'}>Daily</Link>
                    </div>
                    <div>
                        <Link to={'/multiplayer'}>Multiplayer</Link>
                    </div>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="header">
                <div className="menu-items">
                    {this.getLinks()}
                </div>
                <div className="title">
                    Wordl
                </div>
            </div>
        );
    }
}

export default NavBar;