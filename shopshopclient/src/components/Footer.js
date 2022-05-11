import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import ShopShopLogo from '../Assets/ShopShopLogo.png';
import { signOutUser } from "../Data/AuthAgents";

export default function Footer({ agent }) {
  const nav = useNavigate();
  
  const handleClick = (e) => {
    signOutUser();
    nav(`/about`);
  }
  
  return (
      <div id="footerDiv" className="footer-nav">
        {agent ? (
          <li className="nav-link">
            <button 
              onClick={(e) => handleClick(e)}
              type="button"
              className="btn btn-warning footer-btn">
                Sign Out
            </button>
          </li>
        ) : (
          <Link className="nav-link" to="/agentLogin">
            Agent Login
          </Link>
            )}
        <Link className="navbar-brand navbar-logo" to="/about">
                <img className="footer-logo" src={ShopShopLogo} alt='logo' />
        </Link>
        <footer className="footer-contact-info">
          <p className="footer-email">info@shopshop.com</p>
          <p className="footer-address">123 Main Street, Nashville, TN, 37213</p>
          <p className="footer-phone">615-555-1000</p>
        </footer>
      </div>
  );
}