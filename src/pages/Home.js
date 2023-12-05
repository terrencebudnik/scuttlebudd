import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import chatBubbleLeft from "../images/chat-bubble-left.svg";
import chatBubbleRight from "../images/chat-bubble-right.svg";
import chatBubbleCenter from "../images/chat-bubble-center.svg";
import "./Home.css";

const Home = () => {
 

  return (
    <Box  sx={{ display: "flex", flexDirection: "column", flexGrow: 1, padding: "30px 0" }}>
         <div style={{ display: "flex", justifyContent: "flex-start", margin: "20px 0", paddingLeft: "20px"}}>
          <Link to="/quickplay">
            <img
              src={chatBubbleLeft}
              className="elevated-svg"
              alt="chat-bubble-left"
            />
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", margin: "20px 0", paddingRight: "20px"}}>
          <Link to="/whatsthescuttlebudd">
            <img
              src={chatBubbleRight}
              className="elevated-svg"
              alt="chat-bubble-right"
            />
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "80px 0"}}>
          <Link to="/startscuttlebudd" sx={{ justifyContent: "center"}}>
            <img
              src={chatBubbleCenter}
              className="elevated-svg"
              alt="chat-bubble-center"
            />
          </Link>
        </div>     
    </Box>
  );
};

export default Home;
