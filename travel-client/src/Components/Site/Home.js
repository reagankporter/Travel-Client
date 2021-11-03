import React from 'react';
import Sidebar from "./Sidebar";
const Home = (props) => {
    console.log(props.token, "this is home")
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