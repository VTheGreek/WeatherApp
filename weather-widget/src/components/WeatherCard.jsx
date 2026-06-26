function WeatherCard( {weather, unit} ) {
    if (!weather) return null;
    
    return(
        <>
        <h1>{weather.name}</h1>

        <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
            />

        <p>{weather.main.temp}
            {unit === "metric" ? "°C" : "°F"}
        </p>
        <p>{weather.weather[0]?.description}</p>
        <p>{weather.wind.speed} 
            {unit === "metric" ? " m/s" : " mph"}
        </p>
        </>
    )
}

export default WeatherCard