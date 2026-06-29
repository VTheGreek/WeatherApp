const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeather(city, unit = "metric") {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
    );

    if (!response.ok) {
        throw new Error("City Not Found");
    }

    return response.json();
}