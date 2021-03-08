import React from "react";
import LibrarySong from "./librarySong";

const library = ({
  libraryStatus,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            setSongs={setSongs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            // isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

// export default import("@fortawesome/fontawesome-svg-core").Library;
export default library;
