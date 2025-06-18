import { NavLink } from "react-router";
import { useMovies } from "../../contexts/moviesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router";

export default function Header() {
  const { addMovie, setAddMovie } = useMovies();
  const location = useLocation();

  console.log(location.pathname);

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
        {location.pathname === "/movies" ? (
          <div className="icon flex items-center">
            {addMovie ? (
              <FontAwesomeIcon
                className="text-4xl"
                icon={faSquareMinus}
                onClick={() => setAddMovie(!addMovie)}
              />
            ) : (
              <FontAwesomeIcon
                className="text-4xl"
                icon={faSquarePlus}
                onClick={() => setAddMovie(!addMovie)}
              />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
