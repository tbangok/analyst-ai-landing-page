import React, { useEffect, useState } from "react";
import style from "./header-text.module.css";

const words = ["tasty.", "wonderful.", "fancy.", "beautiful.", "cheap."];

const colors = [
  "#8e44ad", // wisteria
  "#2980b9", // belize
  "#c0392b", // pomegranate
  "#16a085", // green sea
  "##6366f1", // midnight blue
];

const TextComponent: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [letterCount, setLetterCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterCount((prev) => {
        if (prev < words[currentWord].length) {
          return prev + 1;
        } else {
          setCurrentWord((prev) => (prev + 1) % words.length);
          return 0;
        }
      });
    }, 300); // Adjust the timing as needed

    // Cleanup function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentWord]);

  return (
    <div className={style["text"]}>
      <p>
        AnalystAI is the tool to elevate your{" "}
        <span
          className={style["word"]}
          style={{
            color: colors[currentWord],
            transition: "opacity 0.5s",
            opacity: 1,
          }}
        >
          {words[currentWord].substring(0, letterCount)}
        </span>
      </p>
    </div>
  );
};

export default TextComponent;
