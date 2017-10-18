// jshint esversion: 6

import React from 'react';

const VideoDetail = ({searchResults}) => {
    if (!searchResults) {
        return <div>Loading...</div>;
    };
    
    const videoId = searchResults.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{searchResults.snippet.title}</div>
                <div>{searchResults.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;