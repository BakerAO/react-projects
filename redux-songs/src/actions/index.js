// Action Creator
export const selectSong = (song) => {
    // Must return an action (object)
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};

