import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieRatingAvg, setMovieRatingAvg] = useState({});

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

  const getMovieRatingAvg = (id) => {
    axios
      .get(`http://127.0.1:3000/movies/rating/${id}`)
      .then((response) => {
        setMovieRatingAvg((prev) => ({
          ...prev,
          [id]: response.data.avg_vote,
        }));
      })
      .catch((error) => {
        console.error("Error fetching movie rating average:", error);
      });
  };

  return (
    <MoviesContext.Provider
      value={{ movies, getMovies, movieRatingAvg, getMovieRatingAvg }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMovies = () => {
  return useContext(MoviesContext);
};

export { MoviesProvider, useMovies };
