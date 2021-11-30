import React from 'react';
import { Link } from 'react-router-dom';

const NavigationSideBar = () => {
    return (
        <nav className="sideBar-nav">
            <ul>
                <li>
                    <Link to="/projects">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationSideBar;