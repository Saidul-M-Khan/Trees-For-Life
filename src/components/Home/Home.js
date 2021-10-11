import React from 'react';
import Banner from '../Banner/Banner'
import Featured from '../Featured/Featured';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Featured></Featured>
        </div>
    );
};

export default Home;