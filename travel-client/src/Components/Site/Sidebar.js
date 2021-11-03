import React from 'react';

import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Journals from '../Journals/Journals';
import Destination from '../TravelSearch/travel';
import BucketList from '/Users/reagank/ElevenFiftyProjects/travelProject/travelClient/travel-client/src/Components/BucketList/BucketList';
import Weatherapp from '../App/Weather';
import BucketIndex from '../BucketList/BucketListIndex.js';


const Sidebar = (props) => {

    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to= '/travel'>Search Destinations</Link></li>
                    <li><Link to='/journals'>Travel Journal</Link></li>
                    <li><Link to='/bucketList'>Travel Bucket List</Link></li>
                    <li><Link to='/weather'>Weather Currently</Link></li>
                    <li><Link to='/bucketIndex'>Bucket Index</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>

                <Route exact path='/travel'><Destination /></Route>
                <Route exact path='/journals'><Journals /></Route>
                <Route exact path='/bucketList'><BucketList token={props.token} /></Route>
                <Route exact path='/weather'><Weatherapp /></Route>
                <Route exact path='/bucketIndex'><BucketIndex token={props.token} /></Route>

                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;
