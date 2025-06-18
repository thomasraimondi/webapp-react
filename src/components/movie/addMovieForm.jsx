import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useMovies } from "../../contexts/moviesContext";

const initialFormData = {
  title: "",
  abstract: "",
  image: "",
  director: "",
};

export default function AddMovieForm() {
  const [formData, setFormData] = useState(initialFormData);
  const { setAddMovie } = useMovies();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("Submitting form data:", formData);

    e.preventDefault();
    axios
      .post("http://127.0.0.1:3000/movies", formData)
      .then((results) => {
        if (results.status !== 201) {
          throw new Error("Failed to add movie");
        }
        navigate("/movies");
        setFormData(initialFormData); // Reset form data after successful submission
        setAddMovie(false);
        console.log("Movie added successfully:", results.data);
      })
      .catch((error) => {
        console.error("Error adding movie:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-black/70">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 z-10 w-1/2 backdrop-blur-lg"
      >
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>
          <FontAwesomeIcon
            className="text-2xl font-bold mb-4"
            icon={faXmark}
            onClick={() => setAddMovie(false)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Director</label>
          <input
            type="text"
            value={formData.director}
            onChange={(e) =>
              setFormData({ ...formData, director: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={formData.abstract}
            onChange={(e) =>
              setFormData({ ...formData, abstract: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
}
