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
                <div className="menu-items">
                        <Link className="links" to={'/main'}>Profile</Link>
                        <Link className="links" to={'/daily'}>Daily</Link>
                        <Link className="links" to={'/multiplayer'}>Multiplayer</Link>
                    <button className="logout" onClick={this.logoutUser}>Logout</button>
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
                {this.getLinks()}
                <div className="title"> Wordl</div>
            </div>
        );
    }
}

export default NavBar;