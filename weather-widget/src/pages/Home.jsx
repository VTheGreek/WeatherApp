import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { useFavorites } from "../context/FavoritesContext";
import { getWeather } from "../services/weatherApi";
import { useTheme } from "../context/ThemeContext";

function Home() {
    const [inputValue, setInputValue] = useState('');
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [unit, setUnit] = useState('metric');
    const { favorites, addToFavorites } = useFavorites();
    const { theme } = useTheme();

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

            const data = await getWeather(city, unit);
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
        <div className={`min-h-screen flex flex-col items-center py-10 gap-6 transition-colors duration-500 ${
           theme === "dark"
            ? "bg-gradient-to-br from-slate-900 to-slate-700"
            : "bg-gradient-to-br from-sky-400 to-blue-700"
            }`}
        >
        <SearchBar 
        value={inputValue}
        onChange={updatedValue} 
        onSubmit={currentValue}    
        />

        {loading && (<p className='text-white text-lg animate-pulse'>Loading...</p>)}
        {error && (<p className='bg-red-500 text-white px-4 py-2 rounded-lg'>{error}</p>)}
        {weather && <WeatherCard 
        weather={weather} 
        unit={unit} 
        toggleUnit={toggleUnit} 
        addToFavorites={() => addToFavorites(weather)} 
        />}

        
        </div>
    )
}

export default Home