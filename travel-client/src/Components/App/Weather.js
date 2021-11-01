import React from 'react';
import { Button } from 'reactstrap';
import WeatherChild from '../app/WeatherChild/WeatherChild';

class Weatherapp extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            city: 'Indianapolis',
            apiKey: '37f707e1986a973647faed4122426481',
            main: {},
            weather: [],
            time: null,
            unit: 'imperial',
        }
        this.cfSwitch=this.cfSwitch.bind(this);
    }

    componentDidMount() {
        this.fetchInterval = setInterval (() => {
            fetch(`${this.state.baseURL}?q=${this.state.city}&units=${this.state.unit}&appid=${this.state.apiKey}`)
            .then(response=>response.json())
            .then(json => this.setState({
                main: json.main,
                weather: json.weather,
            }))
            .catch(err => console.log(err))
        },1500)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState.main.temp, this.state.main.temp);

        let localTime = new Date().toLocaleTimeString();
        if ( prevState.main.temp !== this.state.main.temp) {
            console.log('state has changed');
            this.setState({
                time:localTime
            })
        }
    }
    componentWillUnmount(){
        console.log('clearing interval');
        clearInterval(this.fetchInterval);
    }
    render(){
        return(
            <div className='main'>
                <div className='mainDiv' style={{textAlign:'center'}}>
                <Button color='primary' size='lg' onClick ={()=>this.cfSwitch()} >'Merica/Cel</Button>{''}
                <WeatherChild city={this.state.city} main={this.state.main} weather={this.state.weather} time={this.state.time} unit={this.state.unit} />
                </div>
            </div>
        )
    }
    cfSwitch (){
        if (this.state.unit === 'imperial') {
            this.state.unit = 'metric';
        } else {
            this.state.unit = 'imperial';
        }
    }
}

export default Weatherapp