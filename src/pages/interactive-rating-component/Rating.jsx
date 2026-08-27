import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./rating.css";

function Rating({ rating, setRating }) {
  let navigate = useNavigate();

  const [buttons, setButtons] = useState({
    activeObject: null,
    button: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  });

  function toggleRating(index) {
    const selectedButtonId = buttons.button[index].id;
    setButtons({...buttons, activeObject: selectedButtonId });
    setRating(selectedButtonId);
  }

  function toggleSelected(index) {
    if(buttons.button[index].id === buttons.activeObject){
      return "selected"
    } else {
      return ""
    }
  }

  return (
    <div className="rating-page">
      <div className="rating-container">
        <div className="star outline">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>

        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            navigate("/rating-component-submit");
          }}
        >
          <h2 className="rating-margin">How did we do?</h2>
          <p className="message rating-margin">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          {buttons.button.map((elements, index) => (
            <div
              onClick={() => {
                toggleRating(index);
              }}
              key={index}
              name={index + 1}
              className={`rating-button + ${toggleSelected(index)}`}
            >
              {index + 1}
            </div>
          ))}
          <button className="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Rating;
