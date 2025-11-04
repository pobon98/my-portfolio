// src/components/Typewriter.js
import React, { useEffect, useState } from "react";

export default function Typewriter({ words = [], speed = 90, pause = 1400 }) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // how many letters
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!words.length) return;
    const curr = index % words.length;

    let timeout = null;
    if (forward) {
      if (subIndex <= words[curr].length) {
        timeout = setTimeout(() => setSubIndex((s) => s + 1), speed);
      } else {
        timeout = setTimeout(() => setForward(false), pause);
      }
    } else {
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex((s) => s - 1), Math.max(20, speed / 2));
      } else {
        setForward(true);
        setIndex((i) => i + 1);
      }
    }
    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed, pause]);

  return <span className="typewriter inline-block">{words[index % words.length].slice(0, subIndex)}</span>;
}
