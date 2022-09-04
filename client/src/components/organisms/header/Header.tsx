import React from 'react';
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";

import Button from '../../atoms/button/Button';

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleAuthOnClick = (isAuthenticated: boolean): void => {
    isAuthenticated ? logout() : loginWithRedirect();
  }

  return (
    <header className='Header'>
      <div className="Header-first">
        first
      </div>
      <div className="Header-second">
        second
      </div>
      <div className="Header-third">
        <Button className='Header-auth-btn' onClick={() => handleAuthOnClick(isAuthenticated)}>
          {isAuthenticated ? "log out" : "log in"}
        </Button>
      </div>
    </header>
  );
}

export default Header;
