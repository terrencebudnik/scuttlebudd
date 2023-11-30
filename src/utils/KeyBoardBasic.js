import React, { useState, useEffect } from "react";
import "./KeyboardBasic.css";

const KeyboardBasic = ({ inputName, value, onChange }) => {
  const [isShifted, setIsShifted] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);

  const [input, setInput] = useState(value);
  useEffect(() => {
    setInput(value);
  }, [value]);

  const getButtonClassName = (button) => {
    if (["shift", "backspace", "enter", "ABC", "123"].includes(button)) {
      return "keyboard-button wide-key";
    } else if (button === "space") {
      return "keyboard-button extra-wide-key";
    }
    return "keyboard-button";
  };

  const handleInput = (key) => {
    let newValue;
    switch (key) {
      case "space":
        newValue = input + " ";
        break;
      case "enter":
        newValue = input + "\n";
        break;
      case "123":
        setIsNumbers(true);
        return;
      case "ABC":
        setIsNumbers(false);
        return;
      case "backspace":
        newValue = input.slice(0, -1);
        setInput(newValue);
        onChange({ [inputName]: newValue });
        return;
      default:
        newValue = input + (isShifted ? key.toUpperCase() : key);
        break;
    }

    setInput(newValue);
    onChange({ [inputName]: newValue });

    if (isShifted) {
      setIsShifted(false);
    }
  };

  const topButtons = isNumbers
    ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    : ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondButtons = isNumbers
    ? ["-", "/", ":", ";", "(", ")", "$", "&", "@", '"']
    : ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdButtons = isNumbers
    ? ["_", ".", ",", "?", "!", "'"]
    : ["z", "x", "c", "v", "b", "n", "m"];
  const fourthButtons = isNumbers
    ? ["ABC", "space", "return"]
    : ["123", "space", "enter"];

  return (
    <div className="keyboard">
      <div className="rows" id="top-row">
        {topButtons.map((button, idx) => (
          <div
            className={getButtonClassName(button)}
            key={idx}
            onClick={() => handleInput(button)}
          >
            {button}
          </div>
        ))}
      </div>
      <div className="rows" id="second-row">
        {secondButtons.map((button, idx) => (
          <div
            className={getButtonClassName(button)}
            key={idx}
            onClick={() => handleInput(button)}
          >
            {button}
          </div>
        ))}
      </div>
      <div className="rows" id="third-row">
        {isNumbers ? (
          <>
            {thirdButtons.map((button, idx) => (
              <div
                className={getButtonClassName(button)}
                key={idx}
                onClick={() => handleInput(button)}
              >
                {button}
              </div>
            ))}
            <div
              className="keyboard-button wide-key"
              onClick={() => handleInput("backspace")}
            >
              ←
            </div>
          </>
        ) : (
          <>
            <div
              className="keyboard-button wide-key"
              onClick={() => setIsShifted((prev) => !prev)}
            >
              ↑
            </div>
            {thirdButtons.map((button, idx) => (
              <div
                className={getButtonClassName(button)}
                key={idx}
                onClick={() => handleInput(button)}
              >
                {button}
              </div>
            ))}
            <div
              className="keyboard-button wide-key" 
              onClick={() => handleInput("backspace")}
            >
              ←
            </div>
          </>
        )}
      </div>

      <div className="rows" id="fourth-row">
        {fourthButtons.map((button, idx) => (
          <div
            className={getButtonClassName(button)}
            key={idx}
            onClick={() => handleInput(button)}
          >
            {button === "space" ? " " : button}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardBasic;
