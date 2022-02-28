import React from "react";
import PropTypes from "prop-types";

export default function VideoDetail({ video }) {
  if (!video) {
    return <div>Search something !</div>;
  }

  const videoId = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoId} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
VideoDetail.propTypes = {
  video: PropTypes.object,
};
