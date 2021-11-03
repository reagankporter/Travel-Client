import React, {useState} from 'react';

import {Route, Link, Switch} from 'react-router-dom';
import Journals from '../Journals/Journals';
import Destination from '../TravelSearch/travel';
import Weatherapp from '../App/Weather';
import BucketList from '../BucketList/BucketListIndex.js';


const Sidebar = (props) => {

    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to= '/travel'>Search Destinations</Link></li>
                    <li><Link to='/journals'>Travel Journal</Link></li>
                    <li><Link to='/bucketList'>Travel Bucket List</Link></li>
                    <li><Link to='/weather'>Weather Currently</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                <Route exact path='/travel'><Destination /></Route>
                <Route exact path='/journals'><Journals /></Route>
                <Route exact path='/bucketList'><BucketList token={props.token} /></Route>
                <Route exact path='/weather'><Weatherapp /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;
