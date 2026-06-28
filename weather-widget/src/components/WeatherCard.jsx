function WeatherCard( {weather, unit, toggleUnit} ) {
    if (!weather) return null;
    
    return(
        <div className="bg-white/20 backdrop-blur-md text-white rounded-2xl shadow-lg p-6 w-80 text-center">
        <h1 className="text-2xl font-bold mb-2">{weather.name}</h1>

        <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
            />

        <p className="text-4xl font-bold mt-2">
            {Math.round(weather.main.temp)}
            {unit === "metric" ? "°C" : "°F"}
        </p>

        <p className="capitalize text-sm mt-1 text-white/80">
            {weather.weather[0]?.description}
        </p>

        <p className="mt-2 text-white/80">
            {Math.round(weather.wind.speed)} 
            {unit === "metric" ? " m/s" : " mph"}
        </p>

        <button
        className="mt-4 bg-blue-700 hover:bg-blue-800 transition duration-300 text-white px-4 py-2 rounded-lg" 
        onClick={toggleUnit}>
            Switch to {unit === "metric" ? "°F" : "°C"}
        </button>
        </div>
    )
}

export default WeatherCard