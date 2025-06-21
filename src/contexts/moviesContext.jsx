import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

const initialAlert = {
  message: "",
  elements: [],
};

const MoviesProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_BASE_API_URL;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [alert, setAlert] = useState(initialAlert);
  const [addMovie, setAddMovie] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const getMovies = () => {
    axios
      .get(baseUrl + "/movies")
      .then((response) => {
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const getMovieById = (id) => {
    axios
      .get(`${baseUrl}/movies/${id}`)
      .then((response) => {
        setMovie(response.data.movie);
      })
      .catch((error) => {
        console.error("Error fetching movie by ID:", error);
      });
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        getMovies,
        movie,
        getMovieById,
        addMovie,
        setAddMovie,
        baseUrl,
        alert,
        setAlert,
        isloading,
        setIsLoading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMovies = () => {
  return useContext(MoviesContext);
};

export { MoviesProvider, useMovies };
