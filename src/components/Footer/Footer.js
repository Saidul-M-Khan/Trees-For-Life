import React from 'react';
import './Footer.css'
import logo from '../../images/logo4.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer container-fluid text-center py-4 bg-dark d-flex justify-content-around">
            <div>
                <img src={logo} alt=""/>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/home" activeClassName="selected" className="nav-link text-light px-4">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" activeClassName="selected" className="nav-link text-light px-4">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="selected" className="nav-link text-light px-4">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="selected" className="nav-link text-light px-4">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="d-flex align-items-center text-start">
                    <div className="footer-icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <p className="py-0 m-0">Dhaka</p>
                        <p className="py-0 m-0">BD (Bangladesh)</p>
                    </div>
                </div>
                <div className="d-flex align-items-center text-start pt-3">
                    <div className="footer-icon">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                        <p className="py-0 m-0 fw-bold">+88 016 2336xxxx</p>
                    </div>
                </div>
                <div className="d-flex align-items-center text-start pt-3">
                    <div className="footer-icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                        <p className="py-0 m-0">saidulmursalinkhan@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="text-start">
                <h6 className="fw-bold">About the Company</h6>
                <p className="text-secondary py-2">Trees for life is a non-profit organization. <br />We want to save the world from globalization.</p>
                <div>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-github-square"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;