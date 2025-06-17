import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard.jsx";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getMovieById = (id) => {
    axios
      .get(`http://127.0.0.1:3000/movies/${id}`)
      .then((response) => {
        setMovie(response.data.movie);
      })
      .catch((error) => {
        console.error("Error fetching movie by ID:", error);
      });
  };

  useEffect(() => {
    getMovieById(id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Movie {id} Details Page</h1>
      <p className="text-lg text-gray-700">
        This is the movie details page of your application.
      </p>
      <MovieCard movie={movie} />
    </div>
  );
}
