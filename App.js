import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "Grinning Face",
  "π": "Grinning Face with Big Eyes",
  "π": "Grinning Face with Smiling Eyes",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Grinning Squinting Face",
  "π": "Grinning Face with Sweat",
  "π€£": "Rolling on the Floor Laughing",
  "π": "Face with Tears of Joy",
  "π": "Slightly Smiling Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "not present in database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionaryπ</h1>
      <input
        id="input"
        placeholder="enter emoji"
        onChange={emojiInputHandler}
      />

      <div id="output"> {meaning}</div>
      <h3> emojis present</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
