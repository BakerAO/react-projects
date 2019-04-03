import { combineReducers } from 'redux';

// Creating static list of songs just to test redux
const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '4:05'
        },
        {
            title: 'Macarena',
            duration: '2:30'
        },
        {
            title: 'All Star',
            duration: '3:15'
        },
        {
            title: 'That Way',
            duration: '2:54'
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

