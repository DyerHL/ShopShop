import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/collapse';
import ShopShopLogo from '../Assets/ShopShopLogo.png';


export default function Navbar({ agent }) {

    const uid = sessionStorage.getItem("uid");
    const agentsListingsLink = `/agentHome/${uid}`;

    return (
        <nav className="navbar navbar-expand navbar-light justify-content-center fixed-top bg-white">
            <Link className="navbar-brand navbar-logo" to="/about">
                <img to="/" src={ShopShopLogo} alt='logo' style={{ width: '100px' }}/>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
          <span className="navbar-toggler-icon" />
        </button>
            <div className="" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/agents">
                            AGENTS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/listings">
                            LISTINGS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                            CONTACT
                        </Link>
                    </li>
                    {agent ? (
                        <li className="nav-item">
                            <Link className="nav-link" to={agentsListingsLink}>
                                AGENT HOME
                            </Link>
                        </li>
                    ) : (
                        <li className="nav-item hidden-link">
                            <Link className="nav-link"to="/">
                              SECRET LINK
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}