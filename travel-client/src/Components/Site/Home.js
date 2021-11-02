import Weatherapp from "../App/Weather";
import Sidebar from "./Sidebar";
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