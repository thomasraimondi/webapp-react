export default function Alert({ type, message }) {
  return (
    <div
      className={`border-2 rounded-2xl p-2 mb-2 ${
        type === "error" ? "border-red-700 bg-red-200 text-red-700" : ""
      }`}
    >
      <div className="message">{message}</div>
    </div>
  );
}
