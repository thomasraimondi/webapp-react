import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStartRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function Stars({ maxvote, setFormData, formData }) {
  const [starFill, setStarFill] = useState(false);
  const [nStars, setNStars] = useState(maxvote);

  return (
    <>
      <div className="flex gep-3">
        {Array.from({ length: nStars }).map((_, i) => (
          <>
            {starFill === false ? (
              <FontAwesomeIcon
                icon={faStartRegular}
                className="text-amber-300"
                onClick={() => {
                  setFormData({ ...formData, vote: parseInt(i + 1) });
                  setStarFill(true);
                  setNStars(i + 1);
                  maxvote = i + 1;
                  console.log(maxvote);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                className="text-amber-300"
                onClick={() => {
                  setFormData({ ...formData, vote: parseInt(i + 1) });
                  setNStars(i + 1);
                  maxvote = i + 1;
                  console.log(maxvote);
                }}
              />
            )}
          </>
        ))}
        {Array.from({ length: maxvote - nStars }).map((_, i) => (
          <>
            <FontAwesomeIcon
              icon={faStartRegular}
              className="text-amber-300"
              onClick={() => {
                setFormData({ ...formData, vote: parseInt(i + 1) });
                setStarFill(true);
                setNStars(nStars + (i + 1));
                maxvote = nStars + (i + 1);
                console.log(maxvote);
              }}
            />
          </>
        ))}
      </div>
    </>
  );
}
