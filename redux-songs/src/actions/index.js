// Action Creator must return an action (JSON)
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};


