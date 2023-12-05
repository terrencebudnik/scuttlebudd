import React from "react";
import { useLocation } from "react-router-dom";
import QuickPlayGameLogic from "../utils/QuickPlayGameLogic";

const QuickScuttlebudd = () => {
  const location = useLocation();
  const { difficulty } = location.state || {};

  console.log("Selected Difficulty:", difficulty);

  return (
    <div>
      <QuickPlayGameLogic difficulty={difficulty} />
    </div>
  );
};

export default QuickScuttlebudd;
