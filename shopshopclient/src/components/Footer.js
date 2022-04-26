import React from "react";
import ShopShopLogo from '../Assets/ShopShopLogo.png';

export default function Footer() {
  return (
      <div id="footerDiv" className="footer-nav">
        <h3>Agent Login</h3>
        <img className="footer-logo" src={ShopShopLogo} alt="logo" />
        <footer id="footerContactInfo">
          <a>info@shopshop.com</a>
          <p>123 Main Street, Nashville, TN, 37213</p>
          <p>615-555-1000</p>
        </footer>
      </div>
  );
}
