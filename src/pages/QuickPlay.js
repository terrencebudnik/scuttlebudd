import React, { useState } from "react";
import Box from "@mui/material/Box";
import QuickPlayDifficulty from "../components/QuickPlayDifficulty";
import HowToPlay from "../components/HowToPlay";
import chatBubbleHowToPlay from "../images/chat-bubble-how-to-play.svg";
import "./QuickPlay.css";

const QuickPlay = () => {
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
      <QuickPlayDifficulty />
      <button
        onClick={handleOpen}
        style={{
          backgroundColor: "transparent",
          border: "none",
          paddingTop: "0px",
        }}
      >
        <img src={chatBubbleHowToPlay} alt="how-to-play" />
      </button>
      <HowToPlay open={open} onClose={handleClose} />
    </Box>
  );
};

export default QuickPlay;
