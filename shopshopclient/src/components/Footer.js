import React from "react";
import { Link } from 'react-router-dom';
import ShopShopLogo from '../Assets/ShopShopLogo.png';

export default function Footer() {
  return (
      <div id="footerDiv" className="footer-nav">
        <Link className="nav-link" to="/agentLogin">
          Agent Login
        </Link>
        <Link className="navbar-brand navbar-logo" to="/about">
                <img src={ShopShopLogo} alt='logo' style={{ width: '100px' }}/>
        </Link>
        <footer id="footerContactInfo">
          <a>info@shopshop.com</a>
          <p>123 Main Street, Nashville, TN, 37213</p>
          <p>615-555-1000</p>
        </footer>
      </div>
  );
}
