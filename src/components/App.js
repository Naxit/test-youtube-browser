import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import useVideos from "../hooks/useVideos";

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("rainbows");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="App ui container" style={{ paddingTop: "32px" }}>
      <SearchBar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}
