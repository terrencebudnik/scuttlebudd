import React from "react";
import Box from "@mui/material/Box";

import "./Footer.css";

const Footer = () => {
  return (
    <Box
      position="absolute"
      bottom="0"
      sx={{
        display: "flex",
        flexGrow: 1,
   
        width: "100%",
        justifyContent: "center",
        boxShadow: "0px -8px 4px 0px rgba(0,0,0,0.2)",
        backgroundColor: "#00d8ffff",
      }}
    >
      <p style={{ color: "white" }}>Scuttlebudd &trade; </p>
    </Box>
  );
};

export default Footer;
