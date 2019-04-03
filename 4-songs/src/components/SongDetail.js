import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if (!props.detailedSong) {
        return (
            <div>Select a song</div>
        );
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {props.detailedSong.title}
                <br />
                Duration: {props.detailedSong.duration}
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        detailedSong: state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetail);

