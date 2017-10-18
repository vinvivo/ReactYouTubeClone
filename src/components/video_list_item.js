// jshint esversion: 6

import React from 'react';

/*
    Rather than accepting parameter (props) and then referencing individual methods by:
        const searchResults = props.searchResults;
        const onVideoSelect = props.onVideoSelect;
    We can individually call out props methods in the constant definition like below:
 */
const VideoListItem = ({searchResults, onVideoSelect}) => {
    const imageUrl = searchResults.snippet.thumbnails.default.url;

    return (
        // When a list item is clicked, we will call a function that passes searchResults to onVideoSelect.
        <li onClick={ () => onVideoSelect(searchResults) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{searchResults.snippet.title}</div>
                </div>
            </div>

        </li>
    );
};

export default VideoListItem;