import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function NotFound() {
    const { theme } = useTheme();

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center text-center transition-colors duration-500 ${
                theme === "dark"
                    ? "bg-gradient-to-br from-slate-900 to-slate-700 text-white"
                    : "bg-gradient-to-br from-sky-400 to-blue-700 text-white"
            }`}
        >
            <h1 className="text-7xl font-bold">404</h1>

            <h2 className="text-3xl mt-4 font-semibold">
                Page Not Found
            </h2>

            <p className="mt-3 text-lg text-white/80">
                The page you are looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-8 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg transition duration-300"
            >
                ← Back to Home
            </Link>
        </div>
    );
}

export default NotFound;