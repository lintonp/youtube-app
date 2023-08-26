import { useEffect, useState } from "react";
import { YOUTUBE_ROPULAR_VIDEOS_URL } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videosList, setVideosList] = useState([]);
  useEffect(() => {
    const getVideosData = async () => {
      const data = await fetch(YOUTUBE_ROPULAR_VIDEOS_URL);
      const json = await data.json();
      setVideosList(json?.items);
    };
    getVideosData();
  }, []);
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
