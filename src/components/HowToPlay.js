import React from "react";
import "./HowToPlay.css";

const HowToPlay = ({ open, onClose }) => {
    if (!open) return null;

  return (
    <div className="how-to-play-modal">
      <div className="how-to-play">
        <ul>
          <li>The Scuttlebudd will appear for seconds</li>
          <li>It will then disappear</li>
          <li>Remember the Scuttlebudd</li>
          <li>Type the Scuttlebudd just as you saw it</li>
          <button onClick={onClose}>Close</button>
        </ul>
      </div>
    </div>
  );
};

export default HowToPlay;
