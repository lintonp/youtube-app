const Google_API_KEY = "AIzaSyC_lUwfDYrJE3tKF6q2WdEHLz1RU-VmTg0";

// https://developers.google.com/youtube/v3/docs/videos/list
export const YOUTUBE_ROPULAR_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  Google_API_KEY;

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=COv52Qyctws&key=" +
  Google_API_KEY;

// "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=el"

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=searchKeyword&key=" +
  Google_API_KEY;
// export const YOUTUBE_SEARCH_API =
//   "https://youtube.googleapis.com/youtube/v3/comments?part=iphone&id=iphone&maxResults=12&key=" +
//   Google_API_KEY;

export const YOUTUBE_SEARCH_FILTER =
  "https://youtube.googleapis.com/youtube/v3/search?location=IN&maxResults=25&order=viewCount&q=Music&key=" +
  Google_API_KEY;

//https://youtube.googleapis.com/youtube/v3/search?location=IN&maxResults=25&order=viewCount&q=iphone&key=AIzaSyC_lUwfDYrJE3tKF6q2WdEHLz1RU-VmTg0

// export const YOUTUBE_SEARCH_SUGGESTIONS = "https://corsproxy.io/?https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en-gb&gl=in&sugexp=ytts68ce%2Crankembed.ytb%3D1%2Crankembed.uts%3D1%2Crankembed.rodt%3D0.68%2Ccfro%3D1%2Crankembed.ytb%3D0%2Crankembed.uts%3D0%2Crankembed.rodt%3D0.7&gs_rn=64&gs_ri=youtube&tok=MT_zcuNuRpV4lo1vxpxl5w&ds=yt&cp=3&gs_id=c&q=iph&callback=google.sbox.p50&gs_gbg=yP2SBJchnPo";
export const YOUTUBE_SEARCH_SUGGESTIONS =
  "https://corsproxy.io/?https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en-gb&gl=in&q=iph";

export const YOUTUBE_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=" +
  Google_API_KEY;

export const multipleVideoIDs =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=MULTIPLEVIDEOIDs&key=" +
  Google_API_KEY;
// export const multipleVideoIDs =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=" +
//   Google_API_KEY;
