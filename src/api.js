import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBYDhLfB-uDpabJwCJ3pWikqCXpItFCz2A",
    // key: "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U",

    // key: "AIzaSyBwEzD7Broawu_oEnpdJuxvbcD9x0-iQI8",
  },
});

export default request;
