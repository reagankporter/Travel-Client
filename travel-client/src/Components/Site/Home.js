<<<<<<< HEAD
import React from 'react';

import {Link} from 'react-router-dom';

=======
import Weatherapp from "../App/Weather";
import Sidebar from "./Sidebar";
>>>>>>> 7b497181654508cc9ba08dcaefc2a9f6958da4ac
const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <Sidebar />
                <h1>Travel Planning App</h1>
                <hr />
            </div>
        </div>
    );
};

export default Home;