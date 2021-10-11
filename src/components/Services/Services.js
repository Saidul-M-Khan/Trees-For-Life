import React from 'react';
import './Services.css';

const Services = (props) => {
    const { title, heading, Description, image, cost } = props.services;
    
    return (
    <div className="col">
        <div className="card shadow-lg rounded" style={{height:'820px', width:'100%'}}>

            <img className="rounded-top img-fluid" src={image} alt="" style={{height:'70%', width:'100%'}}/>

                <div className="ps-4 my-4">
                    <h4 className="fw-bolder">{title}</h4>
                    <h6 className="fw-bold">{heading}</h6>
                    <small className="fw-light">{Description}</small>
                </div>

                <hr className="mb-1"/>

                <div className="d-flex justify-content-between align-items-center">
                    <img className="" src="https://cdn.icon-icons.com/icons2/1153/PNG/512/1486564172-finance-loan-money_81492.png" alt="" width="50px"/>
                    <p className="fw-bold">Budget: ${cost}</p>
                </div>
        </div>
    </div>
    

    );
};

export default Services;