import React from 'react';
import PropTypes from 'prop-types';

function VideoContainer({ videos }) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden my-4 w-full">
      {videos.map((videoSrc, index) => (
        <div
          key={`video-container-${videoSrc}`}
          className="w-full aspect-w-16 aspect-h-9 overflow-hidden mb-4 md:mb-0"
        >
          <iframe
            src={videoSrc}
            title={`video ${index + 1}`}
            className="w-full h-64 md:mx-10"
          />
        </div>
      ))}
    </div>
  );
}

VideoContainer.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VideoContainer;
