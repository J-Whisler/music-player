import React from "react";
// import styles
import "./styles/app.scss";
// Importing components
import Player from "./Components/player";
import Song from "./Components/song";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
