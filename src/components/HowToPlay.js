import React from "react";
import "./HowToPlay.css";

const HowToPlay = ({ open, onClose }) => {
    if (!open) return null;

  return (
    <div className="how-to-play-modal">
      <div className="how-to-play">
        <ul>
          <li>The Scuttlebudd will appear for a few seconds</li>
          <li>It will then disappear</li>
          <li>Remember the Scuttlebudd</li>
          <li>Type the Scuttlebudd just as you saw it</li>
          <li>Pay attention to every detail!</li>
        </ul>
          <button onClick={onClose} style={{ marginLeft: "43%", border: "none", borderRadius: "10px", fontFamily:"Short Stack, cursive", backgroundColor: "#ffa500ff" }}>Close</button>
      </div>
    </div>
  );
};

export default HowToPlay;
