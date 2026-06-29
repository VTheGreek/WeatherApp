import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Favorites() {
    const { favorites, removeFavorite } = useFavorites();
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen p-10 transition-colors duration-500 ${
            theme === "dark"
            ? "bg-gradient-to-br from-slate-900 to-slate-700"
            : "bg-gradient-to-br from-sky-400 to-blue-700"
            }`}
        >

            <h1 className="text-4xl font-bold text-white mb-8 text-center">
                Favorite Cities
            </h1>

            {favorites.length === 0 ? (
                <p className="text-white text-center">
                    No favorite cities yet.
                </p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {favorites.map(city => (
                        <div
                            key={city.id}
                            className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg"
                        >
                            <Link
                                to={`/city/${city.name}`}
                                className="text-2xl font-bold hover:underline block"
                            >
                                    {city.name}
                            </Link>

                            <img
                                className="mx-auto"
                                src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                                alt={city.weather[0].description}
                            />

                            <p className="text-3xl font-bold">
                                {Math.round(city.main.temp)}°
                            </p>

                            <p className="capitalize">
                                {city.weather[0].description}
                            </p>

                            <button
                                className="mt-4 w-full bg-red-500 hover:bg-red-600 rounded-lg py-2"
                                onClick={() => removeFavorite(city.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;