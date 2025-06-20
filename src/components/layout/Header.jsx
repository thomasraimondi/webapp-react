import { NavLink } from "react-router";
import { useMovies } from "../../contexts/moviesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router";

export default function Header() {
  const { setAddMovie } = useMovies();
  const location = useLocation();

  return (
    <header className="text-white p-4 bg-gray-800">
      <div className="flex justify-between">
        <nav className="mt-2">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="hover:underline">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
        {location.pathname === "/movies" && (
          <div className="icon flex items-center">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faSquarePlus}
              onClick={() => setAddMovie(true)}
            />
          </div>
        )}
      </div>
    </header>
  );
}
