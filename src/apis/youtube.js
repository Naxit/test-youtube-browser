import axios from "axios";

const KEY = "AIzaSyBn5F402xPLayqFXpOGD7x11ubttgkjNgQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
