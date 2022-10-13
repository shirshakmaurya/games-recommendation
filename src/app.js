import "./styles.css";
import react, { useState } from "react";

var colorMain = "#6E85B7";

const gameDB = {
  story: [
    {
      name: "GTA 5",
      description: "A rockstar game launched in 2013",
      rating: "10/10"
    },
    {
      name: "GTA Vice city",
      description: "A rockstart game launched in 2002",
      rating: "7/10"
    },
    {
      name: "Far Cry",
      description: "Developed by Crytek and launched in 2004",
      rating: "6/10"
    }
  ],

  action: [
    {
      name: "Call of Duty",
      description: "First person shooter game developed by Activision.",
      rating: "8/10"
    },
    {
      name: "Counter Strike",
      description: "Multiplayer tactical first-person shooter game",
      rating: "8/10"
    },
    {
      name: "Halo",
      description: "Military science fiction game.",
      rating: "8/10"
    }
  ],
  sports: [
    { name: "FIFA", description: "Football game", rating: "8/10" },
    { name: "Cricket", description: "Cricket game", rating: "8/10" },
    { name: "WWE 2K22", description: "A Fighting game", rating: "8/10" }
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
              <div style={{ fontSize: "meduim" }}> {game.description} </div>
              <div style={{ fontSize: "smaller" }}> {game.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
