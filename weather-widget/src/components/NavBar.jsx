import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-900 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-white">
          Weather App
        </h1>

        <div className="flex gap-6">
          <Link
            to="/"
            className="text-white hover:text-sky-300 transition"
          >
            Home
          </Link>

          <Link
            to="/favorites"
            className="text-white hover:text-sky-300 transition"
          >
            Favorites
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;