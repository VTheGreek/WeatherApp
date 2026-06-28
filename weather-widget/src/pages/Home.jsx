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
    const [favorites, setFavorites] = useState([]);

    const toggleUnit = () => {
        setUnit(prev => 
            prev === 'metric' ? 'imperial' : 'metric'
        )
    }

    const addToFavorites = () => {
        if(!weather) return;

        setFavorites(prev => [...prev, weather]);
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
        <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-700 flex flex-col items-center py-10 gap-6">
        <SearchBar 
        value={inputValue}
        onChange={updatedValue} 
        onSubmit={currentValue}    
        />

        {loading && (<p className='text-white text-lg animate-pulse'>Loading...</p>)}
        {error && (<p className='bg-red-500 text-white px-4 py-2 rounded-lg'>{error}</p>)}
        {weather && <WeatherCard weather={weather} unit={unit} toggleUnit={toggleUnit} addToFavorites={addToFavorites} />}

        <p className="text-white font-semibold">
        Favorites: {favorites.length}
        </p>
        
        </div>
    )
}

export default Home