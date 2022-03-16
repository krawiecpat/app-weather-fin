import React, { Component } from 'react';
import WeatherCity from './WeatherCity';
import './Weather.css';

import axios from 'axios';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherCity: [],
            filteredWeatherCity: [],
        };
    }

    componentDidMount() {
        this.getWeatherData();

    }


    getWeatherData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop').then(res => {
            const temps = res.data;

            this.setState((state) => {
                let newWeatherList = [];

                for (const [temp, weatherObj] of Object.entries(temps)) {


                    let newWeatherObj = {
                        weather: temp,
                        stacja: weatherObj.stacja,
                        temperatura: weatherObj.temperatura,
                        wilgotnosc: weatherObj.wilgotnosc_wzgledna,
                        cisnienie: weatherObj.cisnienie
                    }

                    if (weatherObj.temperatura < 5) {
                        newWeatherObj.cssClass = 'blue';
                        newWeatherObj.htmlArray = document.getElementsByClassName('TempCity');
                    } else {
                        newWeatherObj.cssClass = 'blue';
                        newWeatherObj.htmlArray = document.getElementsByClassName('TempCity');
                    }

                    newWeatherList.push(newWeatherObj);
                }
                console.log(newWeatherList);

                return ({
                    weatherCity: newWeatherList
                });
            });
            this.filterWeatherCity();
        });
    }

    filterWeatherCity = () => {
        this._inputFilter.value = this._inputFilter.value.trim();

        this.setState((state) => {
            let newFilteredWeatherCity = state.weatherCity.filter((weatherObj) => {
                return (weatherObj.stacja.includes(this._inputFilter.value));
            });
            return({
                filteredWeatherCity: newFilteredWeatherCity
            });
        });
    }


    render() {
        return (
            <div className="Weather">
                <input ref={element => this._inputFilter = element} onChange={this.filterWeatherCity} type="text" placeholder='Filter' />
                <WeatherCity weatherCity={this.state.filteredWeatherCity} />
            </div>
        );
    }
}



export default Weather;