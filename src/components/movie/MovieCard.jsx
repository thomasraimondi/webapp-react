import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    movie && (
      <div className="bg-white rounded-lg shadow-md p-4 w-1/4 m-2">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
        <p className="text-gray-600 mt-1">{movie.release_year}</p>
        <p className="text-gray-800 mt-2">{movie.abstract}</p>
        <div className="mt-4">
          <Link
            to={`/movies/${movie.id}`}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    )
  );
}
