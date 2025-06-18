import { useEffect, useState } from "react";
import axios from "axios";

const initialFormData = {
  text: "",
  vote: "",
  movie_id: null,
  name: "",
};

export default function AddNewReview({ movieId }) {
  const [formDataReview, setFormDataReview] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    formDataReview.movie_id = movieId; // Ensure movie_id is set correctly
    console.log("Submitting review data:", formDataReview);
    // Here you would typically send the formData to your backend API
    // For example:
    axios
      .post("http://127.0.1:3000/reviews", formDataReview)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("Failed to add review");
        }
        console.log("Review added successfully:", response.data);
        // Reset form data after successful submission
        setFormDataReview(initialFormData);
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Review</h2>
      <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
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
