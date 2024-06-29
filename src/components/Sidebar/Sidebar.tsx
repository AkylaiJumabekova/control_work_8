import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const categories = [
    { title: 'Star Wars', id: 'star-wars' },
    { title: 'Famous People', id: 'famous-people' },
    { title: 'Saying', id: 'saying' },
    { title: 'Humour', id: 'humour' },
    { title: 'Motivational', id: 'motivational' },
];

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <nav>
                {categories.map((category) => (
                    <NavLink
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        to={`/quotes/${category.id}`}
                        key={category.id}
                    >
                        {category.title}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
