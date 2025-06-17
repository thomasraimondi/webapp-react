import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="flex gap-4 bg-blue-500 text-white p-4">
      <h1 className="text-2xl">Movies Library</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className="text-white hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="text-white hover:underline">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
