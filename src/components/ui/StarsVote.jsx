import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStartRegular } from "@fortawesome/free-regular-svg-icons";

export default function Stars({ vote, maxvote }) {
  return (
    <>
      {Array.from({ length: maxvote }).map((_, i) =>
        i < vote ? (
          <FontAwesomeIcon key={i} className="text-amber-300" icon={faStar} />
        ) : (
          <FontAwesomeIcon
            key={i}
            className="text-amber-300"
            icon={faStartRegular}
          />
        )
      )}
    </>
  );
}
