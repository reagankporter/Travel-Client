import React from 'react';
import {Link} from 'react-router-dom';
import Weatherapp from "../App/Weather";
import Sidebar from "./Sidebar";

const Home = (props) => {
    console.log(props.token, "this is home")
    return(
        <>
            <div >
                {/* <h1>Travel Planning App</h1>
                <hr /> */}
                <Sidebar token={props.token} />
            </div>
        
        </>
    );
};

export default Home;