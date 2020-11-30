import React, { useState } from "react";
// import styles
import "./styles/app.scss";
// Importing components
import Player from "./Components/player";
import Song from "./Components/song";
import Library from "./Components/library";
// import data
import data from "./data.js";

function App() {
  // State
  const [songs, setsongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library setCurrentSong={setCurrentSong} songs={songs} />
    </div>
  );
}

export default App;
