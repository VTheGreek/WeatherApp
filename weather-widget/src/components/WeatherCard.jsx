function WeatherCard( {weather} ) {
    if (!weather) return null;
    
    return(
        <>
        <h1>{weather.city}</h1>
        <p>{weather.temperature}</p>
        <p>{weather.wind}</p>
        <p>{weather.description}</p>
        </>
    )
}

export default WeatherCard