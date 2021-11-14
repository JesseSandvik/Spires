import React from 'react';
import AuthenticationButton from './buttons/authenticationButton';

const Header = () => {
    return (
        <header>
            <h1>Froggy.</h1>
            <small>Those darn bugs never stood a chance</small>
            <br />
            <AuthenticationButton />
        </header>
    );
}

export default Header;