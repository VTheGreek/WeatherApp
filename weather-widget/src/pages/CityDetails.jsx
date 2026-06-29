import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../services/weatherApi";
import { useTheme } from "../context/ThemeContext";

function CityDetails() {
    const { cityName } = useParams();
    const { theme } = useTheme();


    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            
            const data = await getWeather(cityName);
            setWeather(data);
        };

        fetchWeather();
    }, [cityName]);

    if (!weather) return <p>Loading...</p>;

    return (
        <div className={`min-h-screen flex justify-center items-center transition-colors duration-500 ${
            theme === "dark"
            ? "bg-gradient-to-br from-slate-900 to-slate-700"
            : "bg-gradient-to-br from-sky-400 to-blue-700"
            }`}
        >

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-white">

                <h1 className="text-4xl font-bold">
                    {weather.name}
                </h1>

                <img
                    className="mx-auto"
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt=""
                />

                <p>Temperature: {Math.round(weather.main.temp)}°C</p>

                <p>Humidity: {weather.main.humidity}%</p>

                <p>Wind: {weather.wind.speed} m/s</p>

                <p>{weather.weather[0].description}</p>

            </div>

        </div>
    );
}

export default CityDetails;