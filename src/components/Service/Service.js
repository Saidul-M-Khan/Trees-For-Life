import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, heading, cost, image } = props.service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." style={{height:'250px'}}/>
                        <div className="card-body">
                            <h4 className="card-title text-warning text-uppercase">{title}</h4>
                            <h5 className="card-text text-white">{heading}</h5>
                            <h3 className="card-text text-white">Cost: <span className="text-info">${cost}</span></h3>
                        </div>
                        <div className="card-footer m-auto">
                        <Link to="/services"><button className="btn btn-outline-warning fw-bold">See Details</button></Link>
                        </div>
            </div>
        </div>

    );
};

export default Service;