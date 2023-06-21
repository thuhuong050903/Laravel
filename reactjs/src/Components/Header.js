

import Lazada from "./Lazada";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/Lazada">Admin</Link></li>
                    <li><Link to="#">HomePage</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
