import React from 'react';
import AuthenticationButton from './buttons/authenticationButton';
import SiteTitle from './siteTitle';

const Header = () => {
    return (
        <header>
            <SiteTitle />
            <AuthenticationButton />
        </header>
    );
}

export default Header;