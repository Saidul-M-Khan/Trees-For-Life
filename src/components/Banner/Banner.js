import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="home-header container-fluid text-center">
            <h1 className="wow slideInRight fw-bold" data-wow-duration="1.1s">Plant <span style={{ color: 'rgb(0, 255, 102)' }}>A</span> Tree <span style={{ color: 'rgb(0, 255, 102)' }}>To</span></h1>
            <h3 className="wow slideInLeft fw-bold" data-wow-duration="1.5s">Save The World</h3>
            <br />
            <p className="wow flipInX fw-bold text-dark my-4" data-wow-duration="2.9s">Tree Plantation is one of the best activities for making the planet greener, livelier, and healthier.</p>
            <Link to="/about"><button className="btn btn-dark text-warning btn-return-home fw-bold btn-lg rounded-pill wow bounceInUp"data-wow-duration="3.5s">Learn More</button></Link>
        </div>
    );
};

export default Banner;
