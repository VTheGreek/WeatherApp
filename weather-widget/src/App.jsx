import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import { useTheme } from "./context/ThemeContext";

function App() {
    const { theme } = useTheme();

    return (
        <div
            className={
                theme === "dark"
                    ? "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white transition-all duration-500"
                    : "min-h-screen bg-gradient-to-br from-sky-300 via-sky-500 to-blue-700 text-white transition-all duration-500"
            }
        >
            <NavBar />
            <AppRoutes />
        </div>
    );
}

export default App;