import {
    Card, CardImg, CardTitle, CardSubtitle, Spinner
} from 'reactstrap';



const WeatherChild = (props) => {
    console.log(props);
    return (
        <div>
            {
                Object.keys(props.main).length === 0 && props.weather.length === 0? (
                    <Spinner style={{ width: '3rem', height: '3rem'}} type='grow'/> 
                ) : (
                    <div> <Card body inverse style={{backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>
                            <h1>{props.city}</h1>
                        </CardTitle>
                        <CardSubtitle>
                          <h3>{Math.round(props.main.temp)}°</h3>
                        </CardSubtitle>
                        <div style={{textAlign: 'center'}}>
                        <CardImg src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`} alt='weather icon' style={{height: '50px', width: '50px'}}/>
                        </div>
                        <p style={{fontSize: '12px', marginTop: '3em'}}>Last update at {props.time}</p>
                        </Card> 
                        </div>
                )
            }
        </div>
    )
}
export default WeatherChild