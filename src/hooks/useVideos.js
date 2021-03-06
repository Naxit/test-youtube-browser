import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

export default function useVideos(defaultTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search]; // More common convention is to return an object { videos, search }
}
