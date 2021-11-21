import React from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../assets/not-found.jpg';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={notfoundImg} alt="not found" />
            <div className="content">
                <h3>Ohh! Page Not Found</h3>
                <p>We can't seem to find the page you're looking for.</p>
                <Link to="/">Back Home</Link>
            </div>
        </div >
    );
};

export default NotFound;