import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbarr() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/all">All</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/fullstack-development">Full Stack Development</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/data-science">Data Science</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/cyber-security">Cyber Security</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/career">Career</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}

export default Navbarr