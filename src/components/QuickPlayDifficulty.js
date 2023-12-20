import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import chatBubbleQuickLeft from "../images/chat-bubble-quick-left.svg";
import chatBubbleQuickRight from "../images/chat-bubble-quick-right.svg";


const QuickPlayDifficulty = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "1px 0",
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
        <Link
          to="/quickscuttlebudd"
          state={{ difficulty: "Easy" }}
          style={{
            position: "relative",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <img
            src={chatBubbleQuickLeft}
            className="elevated-svg"
            style={{ width: "100%", height: "auto" }}
            alt="chat-bubble-easy"
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "48%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "28px",
            }}
          >
            Easy
          </div>
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
        <Link
          to="/quickscuttlebudd"
          state={{ difficulty: "Medium" }}
          style={{
            position: "relative",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <img
            src={chatBubbleQuickRight}
            className="elevated-svg"
            style={{ width: "100%", height: "auto" }}
            alt="chat-bubble-medium"
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "52%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "28px",
            }}
          >
            Medium
          </div>
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
        <Link
          to="/quickscuttlebudd"
          state={{ difficulty: "Hard" }}
          style={{
            position: "relative",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <img
            src={chatBubbleQuickLeft}
            className="elevated-svg"
            style={{ width: "100%", height: "auto" }}
            alt="chat-bubble-hard"
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "48%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "28px",
            }}
          >
            Hard
          </div>
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
        <Link
          to="/quickscuttlebudd"
          state={{ difficulty: "Extreme" }}
          style={{
            position: "relative",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <img
            src={chatBubbleQuickRight}
            className="elevated-svg"
            style={{ width: "100%", height: "auto" }}
            alt="chat-bubble-extreme"
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "53%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "28px",
            }}
          >
            Extreme
          </div>
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
        <Link
          to="/quickscuttlebudd"
          state={{ difficulty: "Tricky" }}
          style={{
            position: "relative",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <img
            src={chatBubbleQuickLeft}
            className="elevated-svg"
            style={{ width: "100%", height: "auto" }}
            alt="chat-bubble-tricky"
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "48%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "28px",
            }}
          >
            Tricky
          </div>
        </Link>
      </div>
    </Box>
  );
};

export default QuickPlayDifficulty;
