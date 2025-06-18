import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="flex gap-4 text-black p-4">
      <img className="h-10" src="./logo.png" alt="logo" />
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
    </header>
  );
}
