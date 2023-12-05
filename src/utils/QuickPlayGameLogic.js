import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import scuttlebuddList from "./scuttlebuddList.json";
import calculateScore from "./calculateScore";
import KeyboardBasic from "./KeyBoardBasic";

const QuickPlayGameLogic = ({ difficulty }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [gameState, setGameState] = useState("countdown");
  const [countdown, setCountdown] = useState(5);
  const [sentence, setSentence] = useState("");
  const [userInput, setUserInput] = useState("");

  const difficultyConfig = {
    Easy: { showSentenceTime: 15, inputTime: 15 },
    Medium: { showSentenceTime: 12, inputTime: 12 },
    Hard: { showSentenceTime: 10, inputTime: 10 },
    Extreme: { showSentenceTime: 8, inputTime: 8 },
  };

  const config = difficultyConfig[difficulty] || difficultyConfig.Easy;

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * scuttlebuddList.scuttlebuddList.length);
    setSentence(scuttlebuddList.scuttlebuddList[randomIndex]);
  }, []);

  useEffect(() => {
    let timer;
    
    if (gameState === "countdown" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "countdown" && countdown === 0) {
      setGameState("showSentence");
      setCountdown(config.showSentenceTime);
    } else if (gameState === "showSentence" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "showSentence" && countdown === 0) {
      setGameState("inputSentence");
      setCountdown(config.inputTime);
    } else if (gameState === "inputSentence" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "inputSentence" && countdown === 0) {
      setGameState("finished");
    }

    return () => clearTimeout(timer);
  }, [gameState, countdown, config]);

  useEffect(() => {
    if (gameState === "finished") {
      const score = calculateScore(sentence, userInput);
      logScore(score).then((scoreRef) => {
        navigate("/results", {
          state: { scoreId: scoreRef.key, userId: user.uid },
        });
      });
    }
  }, [gameState, navigate, userInput, sentence, user.uid]);

  const logScore = async (score) => {
    const scoresRef = collection(db, "scores");
    const userScoreRef = doc(scoresRef, user.uid);
  
    const now = new Date();
  
    const userScoresDoc = await getDoc(userScoreRef);
  
    if (userScoresDoc.exists()) {
      await updateDoc(userScoreRef, {
        latestScore: score,
        [`scoresByDifficulty.${difficulty}`]: arrayUnion({
          score: score,
          timestamp: now, 
        }),
      });
    } else {
      await setDoc(userScoreRef, {
        userId: user.uid,
        userName: user.displayName,
        latestScore: score,
        scoresByDifficulty: {
          [difficulty]: [{
            score: score,
            timestamp: now, 
          }],
        },
      });
    }
  
    return userScoreRef;

  
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="quick-play-page">
      <div className="quick-play-page-body">
        {gameState === "countdown" && (
          <div className="get-ready-box">
            <h3>Get ready!</h3>
            <h3>{countdown}</h3>
          </div>
        )}
        {gameState === "showSentence" && <div>{sentence}</div>}
        {gameState === "inputSentence" && (
          <>
            <h3 className="time-left-div">Time left: {countdown}</h3>
            <textarea
              className="quick-play-page-text-input"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type the sentence here..."
              readOnly
            />
          </>
        )}
        {gameState === "finished" && <h3>Time's up!</h3>}
      </div>
      <KeyboardBasic
        inputName="input"
        value={userInput}
        onChange={(newValue) => setUserInput(newValue.input)}
      />
    </div>
  );
};

export default QuickPlayGameLogic;