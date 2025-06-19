import { useState } from "react";
import axios from "axios";

const initialFormData = {
  text: "",
  vote: "",
  movie_id: null,
  name: "",
};

export default function AddNewReview({ movieId, refresh }) {
  const [formDataReview, setFormDataReview] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();

    formDataReview.movie_id = movieId;

    console.log("Submitting review data:", formDataReview);
    axios
      .post("http://127.0.1:3000/reviews", formDataReview)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("Failed to add review");
        }
        console.log("Review added successfully:", response.data);
        // Reset form data after successful submission
        setFormDataReview(initialFormData);
        refresh(movieId);
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="Name"
            type="text"
            placeholder="enter your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formDataReview.name}
            onChange={(e) =>
              setFormDataReview({ ...formDataReview, name: e.target.value })
            }
            required
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="text"
          >
            Review
          </label>
          <textarea
            id="text"
            placeholder="Write your review here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formDataReview.text}
            onChange={(e) =>
              setFormDataReview({ ...formDataReview, text: e.target.value })
            }
            require
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="vote"
          >
            Vote
          </label>
          <input
            id="vote"
            type="number"
            min="1"
            max="5"
            placeholder="1 to 5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formDataReview.vote}
            onChange={(e) =>
              setFormDataReview({ ...formDataReview, vote: e.target.value })
            }
            require
          ></input>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
