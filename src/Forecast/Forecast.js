

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const ForeCast = ({data}) => {
  
  const [botProfiles, setBotProfiles] = useState([]);

  
  useEffect(() => {
    const fetchBotProfiles = async () => {
      try {
        const response = await fetch('https://phase-2-code-challenge-2.onrender.com/bots/');
        if (!response.ok) {
          throw new Error('Failed to fetch bot profiles');
        }
        const data = await response.json();
        setBotProfiles(data);
      } catch (error) {
        console.error('Error fetching bot profiles:', error);
      }
    };

    fetchBotProfiles();
  }, []);
    const WEEK_DAYS=[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",


    ];
    const dayInAWeek=new Date().getDay();
    const forecastDays=WEEK_DAYS.slice(dayInAWeek,WEEK_DAYS.length).concat(
        
        WEEK_DAYS.slice(0,dayInAWeek)
    )

    return (
        <>
        <div>
            <label classname="title">Daily</label>
          
                    {data.list.slice(0,7).map((item,idx)=>(
                        <div>
                            <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.main.temp_min)}Celcius/{Math.round(item.main.temp_max)}Celcius</label>
                    <Link className='btn btn-primary btn-md mx-auto' to={`/detailed-forecast/${item.weather.id}`}>View</Link>
        </div>
                       
                    
                ))}
                    
                   
                    
          
            
      
      </div>

      </>
    );
}

export default ForeCast;
