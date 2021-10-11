import React from 'react';
import './About.css';
import aboutBanner from '../../images/about-us.jpg';
import slider1 from '../../images/slider-1.jpg';
import slider2 from '../../images/slider-2.jpg';
import slider3 from '../../images/slider-3.jpg';

const About = () => {
    return (
        <div className="about container-fluid text-center px-0">
            <div style={{ backgroundColor: '#172024' }} className="d-flex px-5 justify-content-around">
                <div className="wow slideInLeft about-header text-white" data-wow-duration="1.5s">
                    We Are Here To
                    <br />
                    <span style={{ color: 'rgb(0, 255, 102)' }}>Save The World</span>
                    <br />
                    From Global Warming
                </div>
                <div className="about-banner">
                    <img src={aboutBanner} alt="" />
                </div>
            </div>

            <div className="instructor-slider my-5">
                <h1 className="fw-bold text-warning wow slideInRight" data-wow-duration="1.9s">Trees For Life</h1>
                <p className="fw-light wow flipInX" data-wow-duration="2.5s">Trees For Life is a nonprofit organization. We take donations and plant trees all over the country. <br />At Present we are working in Bangladesh. Our main goal is to fight against Global Warming and keep our world safe.</p>

                <div className="slider container-fluid">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex align-items-center justify-content-around">
                                <img src={slider1} className="d-block" alt="..." />
                                
                                <div className="text-start slider-text">
                                    <h2 className="fw-bold text-info">Donation</h2>
                                    <p>1 Tree For $1. This is our motivation. You can donate any amount to safe the world from Global Warming.</p>
                                </div>
                            </div>
                            <div className="carousel-item d-flex align-items-center justify-content-around">
                                <img src={slider2} className="d-block" alt="..." />
                                
                                <div className="text-start slider-text">
                                    <h2 className="fw-bold text-info">Volunteering</h2>
                                    <p>People can work as a volunteer in our organization. Volunteers take the responsibility to plan trees in different targeted location.</p>
                                </div>
                            </div>
                            <div className="carousel-item d-flex align-items-center justify-content-around">
                                <img src={slider3} className="d-block" alt="..." />
                                
                                <div className="text-start slider-text">
                                    <h2 className="fw-bold text-info">Make a Request</h2>
                                    <p>Anyone can make a request for planting trees in their suggested area. We verify that the request and execute it as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
