import "./styles.css";
import react, { useState } from "react";

var colorMain = "#6E85B7";

const gameDB = {
  story: [
    { name: "GTA 5", rating: "10/10" },
    { name: "GTA Vice city", rating: "7/10" },
    { name: "Far Cry", rating: "6/10" }
  ],

  action: [
    { name: "Call of Duty", rating: "8/10" },
    { name: "Counter Strike", rating: "8/10" },
    { name: "God of War", rating: "8/10" }
  ],
  sports: [
    { name: "FIFA", rating: "8/10" },
    { name: "Cricked 07", rating: "8/10" },
    { name: "WWE 2K22", rating: "8/10" }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("story");

  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <h1>Best pc games recommendation</h1>
      <div>
        {Object.keys(gameDB).map((category) => (
          <button onClick={() => categoryClickHandler(category)}>
            {category}
          </button>
        ))}
      </div>
      <hr></hr>

      <div id="display">
        <ul style={{ paddingInlineStart: "0" }}>
          {gameDB[selectedCategory].map((game) => (
            <li id="display-list" key={game.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {game.name} </div>
              <div style={{ fontSize: "smaller" }}> {game.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
