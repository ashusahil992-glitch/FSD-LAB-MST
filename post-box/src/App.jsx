import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const characterCount = text.length;
  const limitExceeded = characterCount > 100;
  const isDisabled = text.trim() === "" || limitExceeded;

  return (
    <div className="container">
      <div className="post-box">
        <h2>Create Post</h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your post..."
        />

        <p className={limitExceeded ? "counter error" : "counter"}>
          {characterCount} / 100
        </p>

        {limitExceeded && (
          <p className="error-message">Limit exceeded</p>
        )}

        <button disabled={isDisabled}>
          Post
        </button>
      </div>
    </div>
  );
}

export default App;