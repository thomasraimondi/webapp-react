import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStartRegular } from "@fortawesome/free-regular-svg-icons";

export default function Stars({ maxvote }) {
  return (
    <>
      {Array.from({ length: maxvote }).map((_, i) => (
        <FontAwesomeIcon
          className="text-amber-300 cursor-pointe"
          icon={faStartRegular}
          onMouseEnter={() => {
            console.log("entro");
          }}
          onMouseLeave={() => {
            console.log("esco");
          }}
        />
      ))}
    </>
  );
}
