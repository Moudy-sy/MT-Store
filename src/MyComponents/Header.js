import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { HiShoppingCart } from 'react-icons/hi';
import { MdLocalShipping } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { Badge } from 'antd';
import UserProfile from './UserProfile';

function Header() {
    const searchContainerRef = useRef(null);

    function toggleSearch() {
        searchContainerRef.current.classList.toggle('search-visible');
    }

    return (
        <nav className="header">
            <h2>Maximumtop</h2>
            <div></div>
            <ul>
                <li>
                    <a to="/">
                        <HiHome />
                    </a>
                </li>
                <li>
                    <a type="button" onClick={toggleSearch}>
                        <BiSearch />
                    </a>
                </li>
                <li>
                    <a to="/cart">
                        <Badge count={5} style={{ backgroundColor: 'red' }}>
                            <HiShoppingCart style={{ fontSize: '26px', color: 'white' }} />
                        </Badge>
                    </a>
                </li>
                <li>
                    <a to="/UserProfile" aria-label="User profile" herf="/UserProfile.js">
                        <FaUser />
                    </a>
                </li>
            </ul>
            <div className="search-container" ref={searchContainerRef}>
                <div className="search-card">
                    <input type="text" placeholder="Search" />
                    <button onClick={toggleSearch}>Close</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
