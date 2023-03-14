import React from 'react';
import './Header.css';

function Header() {
    return (
        <nav className="header">
            <h2>Maximumtop</h2>

            <ul>
                <div className='search'>
                    <input type="text" id="searchInput" placeholder="Search..."></input>
                    <button type="button" id="searchButton">Search</button>
                </div>
                <li><a href="#">Home</a></li>
                <li><a href="#">Today's deal</a></li>
                <li><a href="#">Track</a></li>
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Flag</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </nav>
    );
}

export default Header;