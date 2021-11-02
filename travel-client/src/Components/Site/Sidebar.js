import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Journals from '../Journals/Journals';
import BucketList from '../Bucketlist/BucketList';
import Weatherapp from '../App/Weather';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/journals'>Travel Journal</Link></li>
                    <li><Link to='/bucketList'>Travel Bucket List</Link></li>
                    <li><Link to='/weather'>Weather Currently</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/journals'><Journals /></Route>
                    <Route exact path='/bucketList'><BucketList /></Route>
                    <Route exact path='/weather'><Weatherapp /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;