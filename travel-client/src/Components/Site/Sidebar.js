import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Login from '../Auth/Auth';
import Home from './Home';
import Journals from '../Journals/Journals';
import BucketList from '../BucketList/BucketList';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/login'>Login/Signup</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/journals'>Travel Journal</Link></li>
                    <li><Link to='/bucketList'>Travel Bucket List</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/login'><Login /></Route>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/journals'><Journals /></Route>
                    <Route exact path='/bucketList'><BucketList /></Route>

                    <Route exact path='/'><Home /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;