function WeatherCard( {weather} ) {
    if (!weather) return null;
    
    return(
        <>
        <h1>{weather.name}</h1>

        <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
            />

        <p>{weather.main.temp}°C</p>
        <p>{weather.weather[0]?.description}</p>
        <p>{weather.wind.speed} m/s</p>
        </>
    )
}

export default WeatherCard