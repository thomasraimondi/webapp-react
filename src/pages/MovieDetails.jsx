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
import ReviewCard from "../components/review/ReviewCard";
import Stars from "../components/ui/Stars";

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
  }, []);

  return (
    movie && (
      <div className="flex flex-col items-center text-white justify-center w-3/4 mx-auto p-6 rounded-lg shadow-md">
        <div className="flex gap-5 w-3/4">
          <FontAwesomeIcon
            className="text-4xl cursor-pointer hover:text-gray-300"
            icon={faChevronLeft}
            onClick={() => navigate(-1)}
          />

          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        </div>
        <div className="flex flex-wrap my-5 w-3/4 rounded-3xl bg-white text-black">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-64 h-96 object-cover rounded-l-3xl shadow-lg"
          />
          <div className="ml-8 w-1/2 py-5">
            <p className="text-lg  text-wrap">
              Abstract: {movie.abstract || "No description available."}
            </p>
            <p className="mt-4">Release Date: {movie.release_year}</p>
            <p className="mt-2">Director: {movie.director}</p>
            <div className="stars text-amber-300">
              <Stars vote={movie.avg_vote_movie} maxvote="5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-md w-3/4">
          <div className="flex flex-col mb-5 w-full text-black">
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
              <div className="bg-white shadow-md rounded-b-lg">
                <AddNewReview movieId={movie.id} refresh={getMovieById} />
              </div>
            )}
          </div>
          {movie.reviews && movie.reviews.length > 0 ? (
            movie.reviews.map((review) => <ReviewCard review={review} />)
          ) : (
            <p className="text-gray-600">No reviews available.</p>
          )}
        </div>
      </div>
    )
  );
}
