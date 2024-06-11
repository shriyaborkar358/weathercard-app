import React from 'react'
import "./Home.css"
import WeatherCard from '../../components/WeatherCard/WeatherCard'

const weatherData = [
  {
    temperature: 41,
    weather: "SUNNY",
    city: "Bhandara"
  },

  {
    temperature: 29,
    weather: "RAINY",
    city: "Pune"
  },

  {
    temperature: 33,
    weather: "WINDY",
    city: "Nagpur"
  },

  {
    temperature: 25,
    weather: "CLOUDY",
    city: "Mumbai"
  },

  {
    temperature: 7,
    weather: "SNOWY",
    city: "Jammu"
  },
]

function Home() {
  return (
    <div>
      <h1 className='heading'>Weather Cards</h1>
      <div className='weather-card-container'>
        {
          weatherData.map((weatherObj, i) => {

            const { city, temperature, weather } = weatherObj
            return <WeatherCard
              city={city}
              temperature={temperature}
              weather={weather}
              key={i} />
          })
        }
      </div>
    </div>
  )
}

export default Home