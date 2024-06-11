import React from 'react'
import "./WeatherCard.css"

import ImageSunny from "./clear-sky.png"
import ImageRainy from "./rainy-day.png"
import ImageCloudy from "./clouds.png"
import ImageWindy from "./windy.png"
import ImageSnowy from "./snow.png"

function WeatherCard({temperature, weather, city}) {

    const WEATHER_ICONS = {
        "SUNNY" : ImageSunny,
        "RAINY" : ImageRainy,
        "CLOUDY" : ImageCloudy,
        "WINDY" : ImageWindy,
        "SNOWY" : ImageSnowy
    }

    return (
        <div className={`weather-card bg-${weather}`}>
            <img src={WEATHER_ICONS [weather]} className='weather-icon'/>
            <h2 className='city'>{city}</h2>
            <b className='line'>———————</b>
            <p className='weather'><b>{weather}</b></p>   
            <b className='temperature'>{temperature}℃</b>
        </div>
    )
}

export default WeatherCard