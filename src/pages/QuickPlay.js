import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {  addDoc, collection, serverTimestamp } from "firebase/firestore";
// import {  addDoc, collection, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import scuttlebuddList from "../data/scuttlebuddList.json";
import calculateScore from "../data/calculateScore";
import "./QuickPlay.css";

const QuickPlay = () => {
  const [user] = useAuthState(auth);
  const [gameState, setGameState] = useState("countdown");
  const [countdown, setCountdown] = useState(5);
  const [sentence, setSentence] = useState("");
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * scuttlebuddList.scuttlebuddList.length
    );
    setSentence(scuttlebuddList.scuttlebuddList[randomIndex]);
  }, []);

  useEffect(() => {
    let timer;

    if (gameState === "countdown" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "countdown" && countdown === 0) {
      setGameState("showSentence");
      setCountdown(5);
    } else if (gameState === "showSentence" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "showSentence" && countdown === 0) {
      setGameState("input");
      setCountdown(5);
    } else if (gameState === "input" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "input" && countdown === 0) {
      setGameState("finished");
    }

    return () => clearTimeout(timer);
  }, [gameState, countdown]);

  useEffect(() => {
    if (gameState === "finished") {
      const score = calculateScore(sentence, userInput);
      logScore(score).then((scoreRef) => {
        navigate("/results", {
          state: { scoreId: scoreRef.key, userId: user.uid },
        });
      });
    }
  }, [gameState, navigate, userInput, sentence]);

  const logScore = async (score) => {
    const scoreRef = collection(db, "scores");
    await addDoc(scoreRef, {
      userId: user.uid,
      userName: user.displayName,
      score: score,
      createdAt: serverTimestamp(),
    });
    return scoreRef;
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="quick-play-page">
      <div className="quick-play-page-body">
        {gameState === "countdown" && <div className="get-ready-box">
            <h3>Get ready!</h3>
            <h3>{countdown}</h3>
            </div>}
        {gameState === "showSentence" && <div>{sentence}</div>}
        {gameState === "input" && (
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
    </div>
  );
};

export default QuickPlay;
