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
  const isLoading = useSelector((store) => store.videos.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideosData = async () => {
      const data = await fetch(YOUTUBE_ROPULAR_VIDEOS_URL);
      const json = await data.json();
      // console.log("getVideosData", json);
      dispatch(refreshList(json?.items));
    };
    getVideosData();
    // getByFilter();
  }, []);

  return (
    <div
      className={
        isLoading
          ? "p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 opacity-50"
          : "p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      }
    >
      {/* {isLoading && (
        <div className="w-full h-full bg-slate-300 bg-opacity-70"></div>
      )} */}
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
