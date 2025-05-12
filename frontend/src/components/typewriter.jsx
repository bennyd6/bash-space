import React, { useEffect, useState } from "react";

export default function TypewriterHero() {
  const words = ["fast.", "responsive.", "secure.", "modern.", "reliable."];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typeSpeed = isDeleting ? 200 : 300;

    if (pause) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setPause(true);
          setTimeout(() => {
            setPause(false);
            setIsDeleting(true);
          }, 1000); // Pause before deleting
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, pause, wordIndex]);

  return (
    <h1 className="tw">
      <span className="tw-in">We</span> <br /> build websites <br /> that are <br /> <span className="typewriter-text">{text}</span>
      <span className="cursor">|</span>
    </h1>
  );
}
