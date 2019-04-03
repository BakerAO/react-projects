import React from 'react';
import '../styles/VideoCard.css';

export default class VideoCard extends React.Component {
    render() {
        let videoItem = this.props.videoItem;
        return (
            <div
                className="video-card item"
                onClick={() => this.props.onVideoSelect(videoItem)}
            >
                <img
                    className="ui image"
                    alt={videoItem.snippet.title}
                    src={videoItem.snippet.thumbnails.medium.url}
                />
                <div className="content">
                    <div className="header">
                        {videoItem.snippet.title}
                    </div>
                </div>
            </div>
        );
    };
}
