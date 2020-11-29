import React from "react";
import LibrarySong from "./librarySong";

const library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
};

// export default import("@fortawesome/fontawesome-svg-core").Library;
export default library;
