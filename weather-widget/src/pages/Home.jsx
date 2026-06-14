import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';

function Home() {
    const [inputValue, setInputValue] = useState('');
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const updatedValue = event => {
        setInputValue(event.target.value) 
    }

    const currentValue = () => {
        setCity(inputValue)
    }

    return(
        <h1>Home</h1>
    )
}

export default Home