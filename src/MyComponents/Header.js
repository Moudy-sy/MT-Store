import React from 'react';
import './Header.css';
import { HiShoppingCart } from 'react-icons/hi';
import { IoIosFlag } from 'react-icons/io';
import { FcShipped } from 'react-icons/fc';
import { FaUser } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'


function Header() {
    return (
        <nav className="header">
            <h2>Maximumtop</h2>
            <div></div>
            <ul>
                <li><a href="#"><HiHome /></a></li>
                <li><a href="#"><BiCodeAlt /></a></li>
                <li><a href="#"><FcShipped /></a></li>
                <li><a href="#"><FaUser /></a></li>
                <li><a href="#"><IoIosFlag /></a></li>
                <li><a href="#"><HiShoppingCart /></a></li>
            </ul>
        </nav>
    );
}

export default Header;