import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';

function Home() {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const [inputValue, setInputValue] = useState('');
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [unit, setUnit] = useState('metric');

    const toggleUnit = () => {
        setUnit(prev => 
            prev === 'metric' ? 'imperial' : 'metric'
        )
    }

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
          try {  
            setLoading(true);
            setError("");

            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
            )

            if (!res.ok) throw new Error('City Not Found');

            const data = await res.json();
            setWeather(data);

            } catch (err) {
            setError(err.message);

            } finally {
            setLoading(false);
            }
        };

        fetchWeather();
    }, [city, unit]);

    const updatedValue = event => {
        setInputValue(event.target.value) 
    }

    const currentValue = () => {
        const trimmedCity = inputValue.trim();

        if (!trimmedCity) return;
        setCity(trimmedCity);
    }

    return(
        <>
        <SearchBar 
        value={inputValue}
        onChange={updatedValue} 
        onSubmit={currentValue}    
        />

        <p>{inputValue}</p>
        <p>Current city: {city}</p>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && <WeatherCard weather={weather} unit={unit} toggleUnit={toggleUnit} />}
        </>
    )
}

export default Home