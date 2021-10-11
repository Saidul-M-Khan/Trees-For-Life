import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
            fetch('fake.json')
            .then(res=>res.json())
            .then(data=>setServiceDetails(data))
            
    }, []);
    return (
        <div className="home-featured container text-center p-5">
            <h1 className="fw-bold text-info">All <span style={{ color: 'rgb(0, 255, 102)' }}>Service</span> Details</h1>
            <div className="featured-container text-start row row-cols-1 row-cols-md-2 row-cols-lg-1 my-4 g-4">
                {
                    serviceDetails.map(service => (
                            <Services key={service.id} services={service} />
                    ))
                }
            </div>
        </div>
    );
};

export default ServiceDetails;