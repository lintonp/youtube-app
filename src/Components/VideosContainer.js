import { useEffect } from "react";
import {
  YOUTUBE_ROPULAR_VIDEOS_URL,
  // YOUTUBE_SEARCH_FILTER,
} from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

import { refreshList } from "../Store/VideosSlice";
import { useDispatch, useSelector } from "react-redux";

const VideosContainer = () => {
  // const [videosList, setVideosList] = useState([]);
  const videosList = useSelector((store) => store.videos.allVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideosData = async () => {
      const data = await fetch(YOUTUBE_ROPULAR_VIDEOS_URL);
      const json = await data.json();
      console.log("getVideosData", json);
      // console.log("json?.items", json?.items);
      // setVideosList(json?.items);
      dispatch(refreshList(json?.items));
    };
    getVideosData();
    // getByFilter();
  }, []);
  // const getByFilter = async () => {
  //   const searchQuery = "music";
  //   const apiKey = "AIzaSyC_lUwfDYrJE3tKF6q2WdEHLz1RU-VmTg0";
  //   const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchQuery}&part=snippet&type=video`;
  //   const data = await fetch(apiUrl);
  //   // const data = await fetch(YOUTUBE_SEARCH_FILTER);
  //   const json = await data.json();
  //   console.log("getByFilter: " + json);
  // };
  // console.log("First Itrem", videosList[0]);
  return (
    <div className="p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {videosList.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideosContainer;
