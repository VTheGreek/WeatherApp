function WeatherCard( {weather, unit, toggleUnit} ) {
    if (!weather) return null;
    
    return(
        <>
        <h1>{weather.name}</h1>

        <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
            />

        <p>{Math.round(weather.main.temp)}
            {unit === "metric" ? "°C" : "°F"}
        </p>

        <p>{weather.weather[0]?.description}</p>

        <p>{Math.round(weather.wind.speed)} 
            {unit === "metric" ? " m/s" : " mph"}
        </p>

        <button onClick={toggleUnit}>
            Switch to {unit === "metric" ? "°F" : "°C"}
        </button>
        </>
    )
}

export default WeatherCard