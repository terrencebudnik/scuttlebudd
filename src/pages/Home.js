import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import chatBubbleRight from "../images/chat-bubble-right.svg";
import chatBubbleLeft from "../images/chat-bubble-left.svg";
import chatBubbleCenter from "../images/chat-bubble-center.svg";
import HowToPlay from "../components/HowToPlay";
import "./Home.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth={false} disableGutters={true}>
      <List>
        <ListItem sx={{ paddingLeft: "0px" }}>
          <Link to="/quickplay">
            <img
              src={chatBubbleLeft}
              className="elevated-svg"
            />
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "flex-end", paddingRight: "0px" }}>
          <Link to="/whatsthescuttlebudd">
            <img
              src={chatBubbleRight}
              className="elevated-svg"
            />
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center", padding:"0px"}}>
          <Link to="/startscuttlebudd" sx={{ justifyContent: "center"}}>
            <img
              src={chatBubbleCenter}
              className="elevated-svg"
            />
          </Link>
        </ListItem>
      </List>

      {/* <button className="how-to-play-button" onClick={handleOpen}>
        How To Play
      </button> */}

      {/* <Link to="/startscuttlebudd">
         
            Start the Scuttlebudd
        
        </Link> */}
      {/* <Link to="/friends">
          <button className="friends-button">Friends</button>
        </Link> */}
      {/* <Link to="/whatsthescuttlebudd">
          
            New Scuttlebudd!
     
        </Link>
   */}

      <HowToPlay open={open} onClose={handleClose} />
    </Container>
  );
};

export default Home;
