import React from "react";
import PropTypes from "prop-types";
import "./VideoItem.css";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <>
      <div className="video-item item" onClick={() => onVideoSelect(video)}>
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div className="content">
          <div className="header" style={{ padding: "8px" }}>
            {video.snippet.title}
          </div>
        </div>
      </div>
    </>
  );
}
VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};
