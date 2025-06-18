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
        <div className="flex justify-between items-center bg-gray-100 shadow-md rounded-t-lg">
          <div className="p-4 flex items-center">
            <h2 className="text-2xl font-bold">Movies List</h2>
          </div>
        </div>
        {addMovie && (
          <div className="bg-white p-6 shadow-md rounded-b-lg">
            <AddMovieForm />
          </div>
        )}
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
