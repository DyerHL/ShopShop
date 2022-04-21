import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/collapse';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light justify-content-center fixed-top bg-white">
            <a className="navbar-brand" to="/about">LOGO</a>
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
                </ul>
            </div>
        </nav>
    )
}