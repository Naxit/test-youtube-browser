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
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: 8 }}>{renderedVideos}</div>;
}
VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func,
};
