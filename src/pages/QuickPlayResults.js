import * as React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./QuickPlayResults.css";

const QuickPlayResults = () => {
  return (
    <div className="quick-play-results-page">
      <h2 className="results-header">Results</h2>
      <h3>Your Score: </h3>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <h4>Original Scuttlebudd</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className="accordion-header"
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h4>Your Scuttlebudd</h4>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Link to="/" className="quick-play-results-page-link">
        Click to Play Again!
      </Link>
    </div>
  );
};

export default QuickPlayResults;
