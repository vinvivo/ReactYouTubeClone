import React from 'react';

const VideoList = (props) => {
    // Video list is a designed element, and since Bootstrap is imported, can use Bootstrap classNames for UI design.
    return (
        <ul className="col-md-4 list-group">
            {props.searchResults.length}
        </ul>
    );
};

export default VideoList;