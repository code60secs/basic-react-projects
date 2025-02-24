import React, { useState } from "react";

const emojis = ["😀", "🚀", "🎉", "💻", "🔥", "😂", "🐱", "🍕"];

function App() {
  const [emoji, setEmoji] = useState("😃");

  return (
    <div id="container">
      <h1 id="title">Random Emoji Generator 🤖</h1>
      <p id="emoji-display">{emoji}</p>
      <button
        id="generate-btn"
        onClick={() => setEmoji(emojis[Math.floor(Math.random() * emojis.length)])}
      >
        Generate Emoji 🎲
      </button>
    </div>
  );
}

export default App;

