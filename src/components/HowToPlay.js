import React from "react";
import "./HowToPlay.css";

const HowToPlay = ({ open, onClose }) => {
    if (!open) return null;

  return (
    <div className="how-to-play-modal">
      <div className="how-to-play">
        <ul>
          <li>The Scuttlebutt will appear for seconds</li>
          <li>It will then disappear</li>
          <li>Remember the Scuttlebutt</li>
          <li>Type the Scuttlebutt just as you saw it</li>
          <button onClick={onClose}>Close</button>
        </ul>
      </div>
    </div>
  );
};

export default HowToPlay;
