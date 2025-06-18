import axios from "axios";

export default function DeleteConfirm({ entity, id, cancel }) {
  const handleSubmit = () => {
    axios.delete(`http://127.0.0.1:3000/${entity}/${id}`).then((response) => {
      cancel(false);
    });
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 bg-black/70 h-screen w-full">
      <div className="bg-white text-black w-1/4 rounded-2xl p-4">
        Confimr Delete?
        <form onSubmit={handleSubmit}>
          <button type="submit" className="rounded-lg bg-green-300 p-5">
            si
          </button>
          <button
            type="button"
            className="rounded-lg bg-red-300 p-5"
            onClick={() => cancel(false)}
          >
            no
          </button>
        </form>
      </div>
    </div>
  );
}
