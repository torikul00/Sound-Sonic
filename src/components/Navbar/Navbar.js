import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div >
                    <h2 className="brand-name">SONIC SOUND</h2>
                </div>
                <div className="links">
                    <a href="/">HOME</a>
                    <a href="/dashboard">DASHBOARD</a>
                    <a href="/reviews">REVIEWS</a>
                    <a href="/blogs">BLOGS</a>
                    <a href="about">ABOUT</a>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;