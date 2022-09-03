import React from 'react'
import "./Header.css";

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
        third
      </div>
    </header>
  );
}

export default Header;
