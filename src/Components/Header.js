import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="Header navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to={"/"} >Home</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;