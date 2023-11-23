import React, { useState } from "react";
import HowToPlay from "../components/HowToPlay";
import "./Home.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className="home-page">
      <h2>What's the Scuttlebudd?</h2>
      <button className="how-to-play-button" onClick={handleOpen}>How To Play</button>
      <HowToPlay open={open} onClose={handleClose} />
    </main>
  );
};

export default Home;
