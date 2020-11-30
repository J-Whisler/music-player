import React, { useState, useRef } from "react";
// import styles
import "./styles/app.scss";
// Importing components
import Player from "./Components/player";
import Song from "./Components/song";
import Library from "./Components/library";
// import data
import data from "./data.js";

function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songs, setsongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [songInfo, setSongInfo] = useState({
  //   currentTime: 0,
  //   duration: 0,
  // });
  // const timeUpdateHandler = (e) => {
  //   const current = e.target.currentTime;
  //   const duration = e.target.duration;
  //   setSongInfo({ ...songInfo, currentTime: current, duration });
  // };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        // songInfo={songInfo}
        // setSongInfo={setSongInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
      {/* <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio> */}
    </div>
  );
}

export default App;
