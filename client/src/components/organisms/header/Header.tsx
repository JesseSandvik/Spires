import React from 'react';
import "./Header.css";

import LoginButton from "../../atoms/loginButton/LoginButton";

type Props = {}

function Header({}: Props) {
  return (
    <header>
      <div className="header-first">
        first
      </div>
      <div className="header-second">
        second
      </div>
      <div className="header-third">
        <LoginButton />
      </div>
    </header>
  );
}

export default Header;
