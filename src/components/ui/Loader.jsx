import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-black/70">
      <FontAwesomeIcon
        className="text-white text-6xl"
        icon={faCircleNotch}
        spin
      />
    </div>
  );
}
