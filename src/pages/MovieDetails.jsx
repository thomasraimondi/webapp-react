import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faSquareMinus,
} from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import AddNewReview from "../components/review/addNewRevie";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [addReview, setAddReview] = useState(false);
  const navigate = useNavigate();

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
  }, [movie]);

  return (
    movie && (
      <div className="flex flex-col items-center justify-center bg-gray-100 w-3/4 mx-auto p-6 rounded-lg shadow-md">
        <div className="flex gap-5 w-3/4">
          <FontAwesomeIcon
            className="text-4xl cursor-pointer text-gray-600 hover:text-gray-800"
            icon={faChevronLeft}
            onClick={() => navigate(-1)}
          />

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
          <div className="flex flex-col mb-5 w-full">
            <div className="flex justify-between items-center bg-gray-100 shadow-md rounded-t-lg">
              <div className="p-4 flex items-center">
                <h2 className="text-2xl font-bold">Reviews</h2>
              </div>
              <div className="icon p-4 flex items-center">
                {addReview ? (
                  <FontAwesomeIcon
                    className="text-4xl"
                    icon={faSquareMinus}
                    onClick={() => setAddReview(!addReview)}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="text-4xl"
                    icon={faSquarePlus}
                    onClick={() => setAddReview(!addReview)}
                  />
                )}
              </div>
            </div>
            {addReview && (
              <div className="bg-white p-6 shadow-md rounded-b-lg">
                <AddNewReview movieId={movie.id} />
              </div>
            )}
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
