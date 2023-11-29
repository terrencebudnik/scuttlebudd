import React, { useState, useRef } from "react";
import HowToPlay from "../components/HowToPlay";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <main className="home-page">
      <h2 className="home-page-header">What's the Scuttlebudd?</h2>
      <button className="how-to-play-button" onClick={handleOpen}>
        How To Play
      </button>

      <div className="home-page-link-container">
        <Link to="/quickplay">
          <button className="quick-play-button">Quick Play</button>
        </Link>
        <Link to="/startscuttlebudd">
          <button className="start-scuttlebudd-button">
            Start Scuttlebudd
          </button>
        </Link>
        <Link to="/friends">
          <button className="friends-button">Friends</button>
        </Link>
        <Link to="/whatsthescuttlebudd">
          <button className="whats-the-scuttlebudd-button">
            What's the Scuttlebudd?
          </button>
        </Link>
      </div>
      
      <HowToPlay open={open} onClose={handleClose} />
      
    </main>
  );
};

export default Home;
