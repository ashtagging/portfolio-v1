import React from "react";
import "./readbay.scss";

function Readbay() {
  return (
    <div className="video-page">
      <div className="video-container">
        <video controls autoPlay width="95%" height="auto">
          <source src="assets/readbay.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Readbay;