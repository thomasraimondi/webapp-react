import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useMovies } from "../../contexts/moviesContext";

export default function MovieList() {
  const { movies, getMovies } = useMovies();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Movies List</h2>
      <p className="text-gray-700">This is the Movies page.</p>
      <p className="text-gray-700">You can add your movies here.</p>
      <div className="flex gap-4 flex-wrap">
        {movies ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </div>
  );
}
