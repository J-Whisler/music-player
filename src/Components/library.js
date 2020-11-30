import React from "react";
import LibrarySong from "./librarySong";

const library = ({ songs, setCurrentSong, audioRef }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
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
