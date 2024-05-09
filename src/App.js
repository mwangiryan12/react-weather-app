import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
// import { useState } from "react";
// import Search from "./components/search/search";
// import CurrentWeather from "./components/current-weather/current-weather";
// import Forecast from "./components/forecast/forecast";
// import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
// import "./App.css";

// function App() {
//   const [currentWeather, setCurrentWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [error, setError] = useState(null);

//   const handleOnSearchChange = (searchData) => {
//     const [lat, lon] = searchData.value.split(" ");

//     // Function to fetch weather data with error handling and retry logic
//     const fetchData = async (url) => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
//         }
//         return await response.json();
//       } catch (error) {
//         throw new Error(`Error fetching data: ${error.message}`);
//       }
//     };

//     // Fetch current weather and forecast data with retry logic
//     Promise.all([
//       fetchData(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`),
//       fetchData(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
//     ])
//       .then(([weatherResponse, forecastResponse]) => {
//         setCurrentWeather({ city: searchData.label, ...weatherResponse });
//         setForecast({ city: searchData.label, ...forecastResponse });
//         setError(null); // Clear any previous error
//       })
//       .catch((error) => {
//         setError(error.message);
//         setCurrentWeather(null);
//         setForecast(null);
//       });
//   };

//   return (
//     <div className="container">
//       <Search onSearchChange={handleOnSearchChange} />
//       {error && <p>{error}</p>}
//       {currentWeather && <CurrentWeather data={currentWeather} />}
//       {forecast && <Forecast data={forecast} />}
//     </div>
//   );
// }

// export default App;
