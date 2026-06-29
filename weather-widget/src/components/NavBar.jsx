import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex justify-between items-center p-5 bg-blue-800 text-white">

            <div className="flex gap-6">

                <Link to="/">Home</Link>

                <Link to="/favorites">
                    Favorites
                </Link>

            </div>

            <button
                onClick={toggleTheme}
                className="bg-white text-black px-3 py-2 rounded"
            >
                {theme === "light"
                    ? "🌙 Dark"
                    : "☀️ Light"}
            </button>

        </nav>
    );
}

export default NavBar;