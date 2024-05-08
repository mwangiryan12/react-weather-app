
import './App.css';
import {WEATHER_API_URL, WEATHER_API_KEY} from ""
import { useState } from 'react';

import Search from '.compnonents/search/search';
//import {'api_link'} from '..api';
import currentWeather from './components/current-weather/current-weather';
import 

function App() {
  
    const[];
    const[];
  
    const handleOnSearch = (searchData) => {
      //console.log(searchData);
      const [ lat,lon] = searchData.value.split(" ");

    const currentWeatherFetch =  fetch(`{}  )
    const forecastFetch = fetch()

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async(repsonse)) =>{
          const weatherResponse = await response[0] .json();
          const foreacastResponse = await response[1] .json();

        }
          setCurrentWeather({city: searchData.label, ...weatherResponse);
          setForecast({city: searchData.label, ...forecastResponse});
    //api
   }
    return (
      <div className = "container">
        <Search onSearchChange ={handleOnSearch} />
        {currentWeather && <currentWeather data={currentWeather}/>}
        {forecast &&<Forecast data={}/>}
        
      </div>
  
        
        
      
  
    )

  
}

export default App;
