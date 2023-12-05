import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import chatBubbleEasy from "../images/chat-bubble-easy.svg";
import chatBubbleMedium from "../images/chat-bubble-medium.svg";
import chatBubbleHard from "../images/chat-bubble-hard.svg";
import chatBubbleExtreme from "../images/chat-bubble-extreme.svg";
import chatBubbleTricky from "../images/chat-bubble-tricky.svg";

const QuickPlayDifficulty = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "30px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "1px 0",
          paddingLeft: "10px",
        }}
      >
        <Link to="/quickplay">
          <img src={chatBubbleEasy} className="elevated-svg" alt="chat-bubble-easy" />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1px 0",
          paddingRight: "10px",
        }}
      >
        <Link to="/whatsthescuttlebudd">
          <img src={chatBubbleMedium} className="elevated-svg" alt="chat-bubble-medium" />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "1px 0",
          paddingLeft: "10px",
        }}
      >
        <Link to="/quickplay">
          <img src={chatBubbleHard} className="elevated-svg" alt="chat-bubble-hard" />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1px 0",
          paddingRight: "10px",
        }}
      >
        <Link to="/whatsthescuttlebudd">
          <img src={chatBubbleExtreme} className="elevated-svg" alt="chat-bubble-extreme" />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "1px 0",
          paddingLeft: "10px",
        }}
      >
        <Link to="/quickplay">
          <img src={chatBubbleTricky} className="elevated-svg" alt="chat-bubble-tricky" />
        </Link>
      </div>
    </Box>
  );
};

export default QuickPlayDifficulty;
