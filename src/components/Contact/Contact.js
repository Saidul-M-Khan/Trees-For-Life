import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact text-center pt-4 text-warning">
            <h1>MAIL US IF <span style={{ color: 'rgb(0, 255, 102)' }} >YOU HAVE</span> ANY QUESTIONS</h1>
            <br />
            <div className="form">
                <input type="text" placeholder="Enter Your Name" className="Name" />
                <br />
                <input type="email" placeholder="Enter Your Email" className="email" />
                <br />
                <input type="text" placeholder="Ask Your Questions" id="message" />
            </div>
            <button className="btn btn-warning fw-bold mt-4">Send Message</button>
        </div>
    );
};

export default Contact;
