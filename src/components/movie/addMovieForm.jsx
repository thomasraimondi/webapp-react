import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useMovies } from "../../contexts/moviesContext";
import { useNavigate } from "react-router";
import axios from "axios";
import Alert from "../ui/Alert";

const initialFormData = {
  title: "",
  director: "",
  genre: "",
  release_year: null,
  abstract: "",
  image: "",
};

export default function AddMovieForm() {
  const [formData, setFormData] = useState(initialFormData);
  const { setAddMovie, baseUrl, getMovies, alert, setAlert } = useMovies();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("Submitting form data:", formData);
    e.preventDefault();
    axios
      .post(baseUrl + "/movies", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((results) => {
        if (results.status !== 201) {
          throw new Error("Failed to add movie");
        }
        getMovies();
        const newMovieId = results.data.id;
        setFormData(initialFormData);
        setAddMovie(false);

        navigate("/movies/" + newMovieId);
      })
      .catch((error) => {
        console.error("Error adding movie:", error);
        setAlert({
          ...alert,
          message: error.response.data.message,
          elements: error.response.data.responseData.malformatElements,
        });
      });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-black/70">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 z-10 w-1/2 backdrop-blur-lg rounded-lg"
      >
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>
          <FontAwesomeIcon
            className="text-2xl font-bold mb-4"
            icon={faXmark}
            onClick={() => {
              setAddMovie(false);
              setAlert({
                message: "",
                elements: [],
              });
            }}
          />
        </div>
        <div className="flex gap-4">
          <div className="">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            {alert.elements.title && (
              <Alert type="error" message={alert.elements.title[0].message} />
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Director</label>
              <input
                type="text"
                value={formData.director}
                onChange={(e) =>
                  setFormData({ ...formData, director: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            {alert.elements.director && (
              <Alert
                type="error"
                message={alert.elements.director[0].message}
              />
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Genere</label>
              <input
                type="text"
                value={formData.genre}
                onChange={(e) =>
                  setFormData({ ...formData, genre: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            {alert.elements.genre && (
              <Alert type="error" message={alert.elements.genre[0].message} />
            )}
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.abstract}
                onChange={(e) =>
                  setFormData({ ...formData, abstract: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            {alert.elements.abstract && (
              <Alert
                type="error"
                message={alert.elements.abstract[0].message}
              />
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Release Year</label>
              <input
                type="number"
                value={formData.release_year}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    release_year: parseInt(e.target.value),
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
                maxLength={4}
                onInput={(e) => {
                  const target = e.target;
                  target.value = target.value.replace(/\D/g, "");
                  if (target.value.length > target.maxLength) {
                    target.value = target.value.slice(0, target.maxLength);
                  }
                }}
              ></input>
            </div>
            {alert.elements.release_year && (
              <Alert
                type="error"
                message={alert.elements.release_year[0].message}
              />
            )}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Image URL</label>
              <input
                type="file"
                name="image"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            {alert.elements.image && (
              <Alert type="error" message={alert.elements.image[0].message} />
            )}
          </div>
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
