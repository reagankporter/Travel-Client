import React from 'react';
import './logout.css'
import logout from '../../Assets/compass.png';
const Logout = props => {
return (
    <div> 
       <img id='logout' alt= 'power button' src={logout} onClick={props.clearLocalStorage}/>
    </div>
)
}

export default Logout;