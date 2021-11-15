import React from 'react';
import { Link } from 'react-router-dom';

const SiteTitle = () => {
    return (
        <div className="siteTitle">
            <Link to="/">
                <h1><i className="fas fa-frog"></i>Froggy.</h1>
            </Link>
            <small>Catch Bugs. Swim Towards Success.</small>
        </div>
    );
}

export default SiteTitle;