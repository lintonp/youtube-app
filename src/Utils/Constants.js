const API_KEY = "AIzaSyC_lUwfDYrJE3tKF6q2WdEHLz1RU-VmTg0";

// https://developers.google.com/youtube/v3/docs/videos/list
export const YOUTUBE_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
  API_KEY;
//   " HTTP/1.1";
