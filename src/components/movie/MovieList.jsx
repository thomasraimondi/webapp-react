import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useMovies } from "../../contexts/moviesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddMovieForm from "./addMovieForm";

export default function MovieList() {
  const { addMovie, movies, getMovies } = useMovies();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="flex flex-col mb-10">
        <div className="flex justify-center text-white shadow-md rounded-t-lg">
          <h2 className="text-4xl font-bold">Movies List</h2>
        </div>
        {addMovie && <AddMovieForm />}
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {movies ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </>
  );
}
