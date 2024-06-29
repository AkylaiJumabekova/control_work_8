import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <NavLink className="logo" to="/">Quotes Central</NavLink>
                <nav className="main-nav">
                    <NavLink className="nav-link" to="/">All</NavLink>
                    <NavLink className="nav-link" to="/submit">Submit new quote</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
