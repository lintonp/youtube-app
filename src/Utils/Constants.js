const Google_API_KEY = "AIzaSyC_lUwfDYrJE3tKF6q2WdEHLz1RU-VmTg0";

// https://developers.google.com/youtube/v3/docs/videos/list
export const YOUTUBE_ROPULAR_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  Google_API_KEY;

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
  Google_API_KEY;

// "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=el"
