import { combineReducers } from 'redux';

// List of songs
const songListReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Dance Monkey", duration: "4:20" },
    { title: "Goodbye", duration: "6:32" },
    { title: "Randsom", duration: "2:56" }
  ];
};

// Selecting a specific song from the list

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};


export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer
});


