import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";

export default function MovieCard({ movie }) {
  const formatVote = !isNaN(parseFloat(movie.avg_vote_movie).toFixed(1))
    ? parseFloat(movie.avg_vote_movie).toFixed(1)
    : 0;

  return (
    movie && (
      <Link
        to={`/movies/${movie.id}`}
        className="card rounded-3xl  w-1/4 text-center bg-white flex hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-gray-400 duration-300"
      >
        <img
          className="w-1/3 h-40 rounded-l-3xl"
          src={movie.image}
          alt="card-image"
        />
        <div className="card-body p-3 flex flex-col grow">
          <div className="card-header flex gap-3 justify-between items-center">
            <h1 className="text-lg font-bold">{movie.title}</h1>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <p className="text-gray-500 mt-2 text-xs">{movie.abstract}</p>
          <div className="mt-auto">
            <div className="data flex justify-around">
              <div
                className={`text-center flex items-center ${
                  formatVote >= 4 ? "bg-green-300" : "bg-red-300"
                } rounded-full px-2`}
              >
                <span className={`text-lg font-bold + `}>{formatVote}</span>
              </div>
              <div className="ltext-center flex items-center bg-blue-300 rounded-full px-2">
                <span className="text-xs text-gray-500">Reviews</span>
                <span className="text-md font-bold text-blue-500">
                  {movie.n_reviewes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  );
}
