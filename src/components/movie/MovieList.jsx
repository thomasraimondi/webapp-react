import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useMovies } from "../../contexts/moviesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddMovieForm from "./addMovieForm";
import Loader from "../ui/Loader";

export default function MovieList() {
  const { addMovie, movies, getMovies, isloading, setIsLoading } = useMovies();

  useEffect(() => {
    setIsLoading(true);
    getMovies();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}
