import React from 'react';

import VideoCard from './VideoCard';

export default class VideoList extends React.Component {
    render() {
        let renderedList = this.props.videos.map((videoItem) => {
            return <VideoCard
                key={videoItem.id.videoId}
                onVideoSelect={this.props.handleVideoSelect}
                videoItem={videoItem}
            />
        });

        return (
            <div>
                Length: {this.props.videos.length}
                <div className="ui relaxed divided list">
                    {renderedList}
                </div>
            </div>
        );
    };
}
