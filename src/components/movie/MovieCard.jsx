import { Link } from "react-router";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  return (
    movie && (
      <div
        id="card-movie"
        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
        style={{ maxWidth: 320 }}
      >
        <div className="relative">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-64 w-full object-cover"
          />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {movie.release_year}
          </span>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">
            {movie.title}
          </h2>
          <p className="text-gray-500 text-sm mb-2 line-clamp-3">
            {movie.abstract}
          </p>
          <div className="flex items-center mt-auto">
            <Link
              to={`/movies/${movie.id}`}
              className="text-blue-600 font-semibold hover:underline transition"
            >
              View Details
            </Link>
            <div className="ml-auto">
              <Rating id={movie.id} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

// movie && (
//   <div id="card-movie">
//     <img
//       src={movie.image}
//       alt={movie.title}
//       className="h-64 object-fit rounded-t-lg"
//     />
//     <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
//     <p className="text-gray-600 mt-1">{movie.release_year}</p>
//     <p className="text-gray-800 mt-2 flex-grow">{movie.abstract}</p>
//     <div className="flex mt-4">
//       <Link
//         to={`/movies/${movie.id}`}
//         className="text-blue-500 hover:underline"
//       >
//         View Details
//       </Link>
//       <Rating id={movie.id} className="ml-auto" />
//     </div>
//   </div>
// )
