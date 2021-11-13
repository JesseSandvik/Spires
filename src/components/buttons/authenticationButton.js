import React from 'react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import SignupButton from './signupButton';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <LogoutButton /> : <><SignupButton /><LoginButton /></>;
}

export default AuthenticationButton;