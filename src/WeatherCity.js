import React from "react";
import './WeatherCity.css';

function WeatherCity(props) {


    let weatherCity = props.weatherCity;
    let liElements = weatherCity.map((weatherObj) => {
        return (
            <li key={weatherObj.weather} className="CityElement">
                <span className="NameCity">{weatherObj.stacja}</span>
                <span className={`TempCity ${weatherObj.temperatura > 7 ? "green":"blue" }`}>Temperatura: {weatherObj.temperatura} </span>
                <span className="WetCity">Wilgotność: {weatherObj.wilgotnosc}%</span>
                <span className="ThrustCity">Ciśnienie:{weatherObj.cisnienie}hPa</span>
            </li>
        );
    });

    return (
        <div className="WeatherList">
            <ul className="TheList">
                {liElements}
            </ul>
        </div>
    );

}

export default WeatherCity;