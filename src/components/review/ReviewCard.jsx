export default function ReviewCard({ review }) {
  return (
    <div key={review.id} className="border-b border-gray-200 py-4 w-full">
      <div className="flex mb-3">
        <div className="min-w-10 h-10 text-lg/10 text-center rounded-full bg-green-500 mx-1">
          {review.name[0]}
        </div>
        <p className="text-gray-800 grow">
          {review.text ? review.text : "No text available."}
        </p>
        <p className="text-gray-800">Vote: {review.vote}</p>
      </div>
      <p className="text-sm text-gray-500">
        - {review.name} on {new Date(review.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}
