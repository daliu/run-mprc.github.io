import React from 'react';
import PropTypes from 'prop-types';

function VideoContainer({ videos, titles = [] }) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden my-4 w-full">
      {videos.map((videoSrc, index) => (
        <div
          key={`video-container-${videoSrc}`}
          className="w-full aspect-w-16 aspect-h-9 overflow-hidden mb-4 md:mb-0"
        >
          <iframe
            src={videoSrc}
            title={titles[index] || `MPRC video ${index + 1}`}
            className="w-full h-64 md:mx-10"
            loading="lazy"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}

VideoContainer.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.string).isRequired,
  titles: PropTypes.arrayOf(PropTypes.string),
};

export default VideoContainer;
