import '../styles/header/header.css';
import React from 'react';
import AppTitle from './appTitle';
import AuthenticationButton from '../components/buttons/authenticationButton';

const Header = () => {
    return (
        <header>
            <AppTitle />
            <AuthenticationButton />
        </header>
    );
}

export default Header;