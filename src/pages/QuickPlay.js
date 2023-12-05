import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import QuickPlayDifficulty from "../components/QuickPlayDifficulty";
import HowToPlay from "../components/HowToPlay";
import chatBubbleHowToPlay from "../images/chat-bubble-how-to-play.svg";
import "./QuickPlay.css";

const QuickPlay = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = (difficulty) => {
    navigate("/quickscuttlebudd", { state: { difficulty } });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "30px 0",
      }}
    >
      <QuickPlayDifficulty onDifficultySelect={handleDifficultySelect} />

      <button
        onClick={handleOpen}
        style={{
          backgroundColor: "transparent",
          border: "none",
          paddingTop: "20px",
        }}
      >
        <img
          src={chatBubbleHowToPlay}
          className="elevated-svg"
          alt="how-to-play"
        />
      </button>
      <HowToPlay open={open} onClose={handleClose} />
    </Box>
  );
};

export default QuickPlay;
