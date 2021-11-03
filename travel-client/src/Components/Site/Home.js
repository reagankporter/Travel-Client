import React from 'react';

import {Link} from 'react-router-dom';
import Weatherapp from "../App/Weather";
import Sidebar from "./Sidebar";
const Home = (props) => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <Sidebar token={props.token} />
                {/* <h1>Travel Planning App</h1>
                <hr /> */}
            </div>
        </div>
    );
};

export default Home;