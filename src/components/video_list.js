// jshint esversion: 6

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // Later, we'll want to reference the results of the below map, so we assign it to a variable 'VideoItems'.
    // To solve the "unique 'key' prop" error, add a key with a unique value. It just so happens that each result from the YouTube API Search has an existing 'etag' ID, so we can use that.
    const VideoItems = props.searchResults.map( (video) => {
        return (
            <VideoListItem
                // onVideoSelect is passed on to VideoListItem as a prop
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                searchResults={video} />
        );
    });

    // Video list is a designed element, and since Bootstrap is imported, can use Bootstrap classNames for UI design.
    return (
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    );
};

export default VideoList;