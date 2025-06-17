import { useParams } from "react-router";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log("Movie details:", movie);
  }, [movie]);

  return (
    movie && (
      <div className="flex flex-col items-center justify-center bg-gray-100 w-3/4 mx-auto p-6 rounded-lg shadow-md">
        <div className="flex flex-col w-3/4">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        </div>
        <div className="flex flex-wrap my-3 w-3/4">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-64 h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="ml-8 w-1/2">
            <p className="text-lg text-gray-700 text-wrap">
              Abstract: {movie.abstract || "No description available."}
            </p>
            <p className="mt-4 text-gray-600">
              Release Date: {movie.release_year}
            </p>
            <p className="mt-2 text-gray-600">Director: {movie.director}</p>
            <p className="mt-2 text-gray-600">Rating: {movie.avg_vote}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-3/4">
          <div className="header-reviews flex items-center justify-between w-full mb-4">
            <h2>Reviews</h2>
            <span>aggiungi</span>
          </div>
          {movie.reviews && movie.reviews.length > 0 ? (
            movie.reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-200 py-4 w-full"
              >
                <p className="text-gray-800">
                  {review.text ? review.text : "No text available."}
                </p>
                <p>Vote: {review.vote}</p>
                <p className="text-sm text-gray-500">
                  - {review.name} on{" "}
                  {new Date(review.created_at).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reviews available.</p>
          )}
        </div>
      </div>
    )
  );
}
