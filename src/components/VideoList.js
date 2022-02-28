import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, onVideoSelect }) {
  if (!videos || !videos.length) return null;

  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={(video) => onVideoSelect(video)}
      />
    );
  });

  return <div className="ui segment">{renderedVideos}</div>;
}
VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func,
};
