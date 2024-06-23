import React, { useState, useEffect } from "react";
import { Kanjiapi } from "kanjiapi-wrapper";

import Kanji from "./Kanji";
import Lyrics from "./Lyrics"; 

import Header from "./header";
import Accordion from "./accordion";
import SongForm from "./songForm";
import EditSongForm from "./editSongForm";
import AboutSidebar from "./aboutSidebar";
import ArtistForm from "./artistForm";

// import { getServerSideProps } from "next";

function App({ songs }) {
  const [kanjiapi, setKanjiapi] = useState(null);
  const [selectedWord, setSelectedWord] = useState("-");
  const [selectedSong, setSelectedSong] = useState(null);

 

  useEffect(() => {
    
    const kanjiapiInstance = Kanjiapi.build();
    setKanjiapi(kanjiapiInstance);
  }, []);
   console.log(songs)

  const handleWordClick = (word) => {
    setSelectedWord(word);
  
    
  };

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  return (
    <>
      <Header />
      <div className="container flex w-full mx-auto max-w-screen-2xl ">
        <div className="w-4/5 px-6 overflow-y-auto">
          <SongForm />
          <ArtistForm />

          <div className="min-h-screen p-4">
            <h2 className="mb-4 font-mono text-2xl font-light tracking-tight">Recently Added</h2>
            {songs && songs.map((song, index) => (
              <Accordion
                key={index}
                artist={song.artist}
                title={song.title}
                lyrics={song.lyrics}
                thumbnail={song.thumbnail}
              >
                {song.lyrics && (
                  <div className="p-2 accordion-items__item jp-wrapper">
                    <Lyrics
                      lyrics={song.lyrics}
                      onWordClick={handleWordClick}
                    />
                  </div>
                )}
                {song.lyricsE && (
                  <div className="p-2 accordion-items__item eng-wrapper">
                    <Lyrics lyrics={song.lyricsE} />
                  </div>
                )}
                {song.lyricsK && (
                  <div className="p-2 accordion-items__item kor-wrapper">
                    <Lyrics lyrics={song.lyricsK} />
                  </div>
                )}
                <EditSongForm song={song} />
              </Accordion>
            ))}
          </div>

          {/* <ul className="song-list">
            {songs.map((song, index) => (
              <li
                className="song-item"
                key={index}
                onClick={() => handleSongClick(song)}
              >
                {song.title} by {song.artist}
              </li>
            ))}
          </ul>
          {selectedSong && (
            <div>
              <h2>{selectedSong.title}</h2>
              <p>Artist: {selectedSong.artist}</p>
              <Lyrics
                lyrics={selectedSong.lyrics}
                onWordClick={handleWordClick}
              />
            </div>
          )} */}
        </div>
        <div className="w-1/5 text-lg sidebar">
          {/* <Lyrics lyrics={lyrics} onWordClick={handleWordClick} /> */}
          <div className="kanji-wrapper p-5 rounded bg-[#e4b976]  rounded-lg">
            {kanjiapi && selectedWord && (
              <>
                <div className="kanji-header">
                  <div>
                    <span className="text-[40px]">{selectedWord}</span>
                  </div>
                </div>
                <div className="kanji-content">
                  <Kanji kanji={kanjiapi.getKanji(selectedWord)} />
                </div>
              </>
            )}

            {/*}
            {selectedWord && kanjiData["kanjis"][selectedWord] && (
              <div>
                <h2>Character: {selectedWord}</h2>
                <Kanji kanji={kanjiData["kanjis"][selectedWord]} />
                 {kanjiData["kanjis"][selectedWord]["grade"]} 
              </div>
            )}  
            */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
