import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Featured = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fake.json')
            .then(response => response.json())
            .then(data => setServices(data))
    } , []);
    return (
        <div className="home-featured container text-center p-5">
            <h1 className="fw-bold text-info">Our <span style={{ color: 'rgb(0, 255, 102)' }}>Best</span> Services</h1>
            <div className="featured-container text-start row row-cols-1 row-cols-md-2 row-cols-lg-3 my-4 g-4">
                {
                    services.slice(0, 6).map(service => (
                                <Service key={service.id} service={service} />
                    ))
                }
            </div>
            <br />
            <Link to="/services"><button className="btn btn-outline-info fw-bold">See More</button></Link>
        </div>
    );
};

export default Featured;
