import React from 'react';
import { NavLink } from 'react-router-dom';

const categories = [
    { title: 'All', id: '' },
    { title: 'Star Wars', id: 'star-wars' },
    { title: 'Famous People', id: 'famous-people' },
    { title: 'Saying', id: 'saying' },
    { title: 'Humour', id: 'humour' },
    { title: 'Motivational', id: 'motivational' },
];

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Quotes Central</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {categories.map((category) => (
                            <li className="nav-item" key={category.id}>
                                <NavLink className="nav-link" to={`/quotes/${category.id}`}>
                                    {category.title}
                                </NavLink>
                            </li>
                        ))}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/submit">
                                Submit new quote
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
