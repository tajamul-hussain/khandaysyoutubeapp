import axios from "axios";
const KEY = "AIzaSyClGWuq9kuKNYqx6xK0G2a9tsL1fywWGBI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
