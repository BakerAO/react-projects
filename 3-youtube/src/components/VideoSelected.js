import React from 'react';

export default class VideoSelected extends React.Component {
    render() {
        let selectedVideo = this.props.selectedVideo;

        if (!selectedVideo) {
            return (
                <div>
                    Select a video to start
                </div>
            );
        }

        const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title="Video Player" />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {selectedVideo.snippet.title}
                    </h4>
                    <p>
                        {selectedVideo.snippet.description}
                    </p>
                </div>
            </div>
        );
    };
}
