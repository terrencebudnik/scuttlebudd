import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import chatBubbleLeft from "../images/chat-bubble-left.svg";
import chatBubbleRight from "../images/chat-bubble-right.svg";
import chatBubbleCenter from "../images/chat-bubble-center.svg";
import "./Home.css";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: "10px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "1px 0",
          paddingLeft: "20px",
        }}
      >
        <Link
          to="/quickplay"
          style={{
            position: "relative",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <img
            src={chatBubbleLeft}
            className="elevated-svg"
            style={{ width: "100%", height: "auto" }}
            alt="chat-bubble-left"
          />
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "24px",
            }}
          >
            Quick Play
          </div>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1px 0",
          paddingRight: "20px",
        }}
      >
        <Link
          to="/whatsthescuttlebudd"
          style={{
            position: "relative",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <img
            src={chatBubbleRight}
            className="elevated-svg"
            style={{ width: "100%", height: "auto" }}
            alt="chat-bubble-right"
          />
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "20px",
            }}
          >
            What's the Scuttlebudd?
          </div>
        </Link>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}
      >
        <Link
          to="/startscuttlebudd"
          sx={{ justifyContent: "center" }}
          style={{
            position: "relative",
            textAlign: "center",
            display: "inline-block",
          }}
        >
          <img
            src={chatBubbleCenter}
            className="elevated-svg"
            style={{ width: "100%", height: "auto" }}
            alt="chat-bubble-center"
          />
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "20px",
            }}
          >
            Start the Scuttlebudd!
          </div>
        </Link>
      </div>
    </Box>
  );
};

export default Home;
