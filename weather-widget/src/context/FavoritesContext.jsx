import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );
    }, [favorites]);

    const addToFavorites = weather => {
        setFavorites(prev => {
            const exists = prev.some(city => city.id === weather.id);

            if (exists) return prev;

            return [...prev, weather];
        });
    };

    const removeFavorite = id => {
        setFavorites(prev =>
            prev.filter(city => city.id !== id)
        );
    };

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}