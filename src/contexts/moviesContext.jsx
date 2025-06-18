import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [addMovie, setAddMovie] = useState(false);

  const getMovies = () => {
    axios
      .get("http://127.0.0.1:3000/movies")
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  return (
    <MoviesContext.Provider
      value={{ movies, getMovies, addMovie, setAddMovie }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMovies = () => {
  return useContext(MoviesContext);
};

export { MoviesProvider, useMovies };
