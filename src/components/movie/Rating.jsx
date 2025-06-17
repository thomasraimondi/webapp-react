import { useEffect } from "react";
import { useMovies } from "../../contexts/moviesContext";

export default function Rating({ id }) {
  const { movieRatingAvg, getMovieRatingAvg } = useMovies();

  useEffect(() => {
    if (id) {
      getMovieRatingAvg(id);
    }
  }, []);

  useEffect(() => {
    console.log("Movie rating average:", movieRatingAvg);
  }, [movieRatingAvg, id]);

  return (
    <span className="ml-auto text-gray-500">
      Rating: {movieRatingAvg?.[id] ?? "N/A"}
    </span>
  );
}
