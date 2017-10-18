import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // Later, we'll want to reference the results of the below map, so we assign it to a variable 'VideoItems'.
    const VideoItems = props.searchResults.map( (video) => {
        return <VideoListItem searchResults = {video} />
    });

    // Video list is a designed element, and since Bootstrap is imported, can use Bootstrap classNames for UI design.
    return (
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    );
};

export default VideoList;