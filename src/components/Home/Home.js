import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div>
                <h1 className='title' >WELCOME TO SONIC SOUND <br /> BEST COLLECTIONS FOR YOU</h1>
                <button className='button'>START BUYING NOW</button>
            </div>
            <div>
                <img src="images/soundbox.png" alt="" />
           </div>
        </div>
    );
};

export default Home;