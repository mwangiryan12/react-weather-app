function DetailedForecast(){

    function goBack() {
        navigate('/');
    }




    return(
        <>
        
   <div className="card">

    <div className="daily-details-grid">
            <div className="daily-datails-grid-item">
                <label>Pressure</label>
                <label>{item.main.pressure}hPa</label>
            </div>
            
            <div className="daily-datails-grid-item">
                <label>Humidity</label>
                <label>{item.main.humidity}%</label>
            </div>
               
            <div className="daily-datails-grid-item">
               <label>Clouds</label>
               <label>{item.clouds.all}%</label>
            </div>
            <div className="daily-datails-grid-item">
              <label>Wind Speed</label>
              <label>{item.wind.speed}m/s</label>
            </div>
            <div className="daily-datails-grid-item">
               <label>Sea level</label>
               <label>{item.main.sea_level}m</label>
            </div>
            <div className="daily-datails-grid-item">
               <label>Feels like:</label>
               <label>{item.main.feels_like}m</label>
            </div>

        </div>

         <button onClick={goBack} className="btn btn-sm btn-warning m-4 p-4">Go Back</button>
</div>
        </>
    )
}




