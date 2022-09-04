import React from 'react';
import "./Footer.css";

type Props = {}

function Footer({}: Props) {
  return (
    <footer>
      <div className='footer-first'>
        first
      </div>
      <div className='footer-second'>
        second
      </div>
      <div className='footer-third'>
        third
      </div>
    </footer>
  )
}

export default Footer;
